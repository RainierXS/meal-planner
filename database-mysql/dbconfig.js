// user has to add a mySQLPassword.js to database-mysql that exports a
// string containing your localhost database password eg.
// module.exports = 'FILL_ME_IN';

const password = require('./mySQLPassword');

const localhost = {
  host: 'localhost',
  user: 'root',
  password,
  database: 'meal_planner',
};

module.exports = localhost;
