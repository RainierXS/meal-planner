const mysql = require('mysql');
const uuidv4 = require('uuid/v4');
const DB_CONFIG = require('./dbconfig.js');

// #region reconnects to db if connection not already established
let connection;
const handleDisconnect = () => {
  connection = mysql.createConnection(DB_CONFIG);

  connection.connect((err) => {
    if (err) {
      // console.log('error when connecting to db:', err);
      setTimeout(handleDisconnect, 2000);
    }
  });
  connection.on('error', (err) => {
    // console.log('db error', err);
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      // console.log('connection slept');
    } else {
      throw err;
    }
  });
};

handleDisconnect(); // initial connection
// #endregion reconnects to db if connection not already established

// returns query results to callback, or sends error
const sendToCallback = (caller, err, results, callback) => {
  if (err) {
    // console.log(`DATABASE ERROR IN ${caller}`, err);
    callback(err, null);
  } else {
    callback(null, results);
  }
};

// #region processes sql query with connection
const processQuery = (caller = 'none', query, callback) => {
  if (connection.state === 'disconnected') {
    handleDisconnect(); // attempt to reconnect to db if disconnected
  }
  connection.query(query, (err, results /* , fields */) => {
    sendToCallback(caller, err, results, callback);
  });
};
// #endregion processes sql query with connection

module.exports = {
  processQuery,
};
