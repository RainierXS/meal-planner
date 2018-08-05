const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const sassMiddleware = require('node-sass-middleware')
const postcssMiddleware = require('postcss-middleware');
const autoprefixer = require('autoprefixer');
// const items = require('../database-mysql');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, '../react-client/dist')));
app.use('/', express.static(path.resolve(__dirname, '../react-client/dist')));

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
// const IP = process.env.IP || '127.0.0.1';

app.get('/', (req, res) => {
  res.render('pages',
    {
      title: 'Meal Planner - RainierXS',
      path: '',
    }
  );
});

// default back to home
app.get('*', (req, res) => res.redirect('/'));

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
