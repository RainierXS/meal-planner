const express = require('express');
const bodyParser = require('body-parser');
//const items = require('../database-mysql');
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, '../react-client/dist')));

// used to send query data back as response
// const passData = (err, data, res) => {
//   if (err) {
//     res.sendStatus(500);
//   } else {
//     res.json(data);
//   }
// };



// app.get('*', (req, res) => {
//   //res.send(`Page not found at ${req.params['0']}`);
//   //res.redirect('/');
// });

const port = process.env.PORT || 3000;
const IP = process.env.IP || "127.0.0.1";

app.listen(port, IP, () => {
  console.log(`listening on port ${port}`);
});