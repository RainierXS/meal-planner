const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cookieParser = require('cookie-parser');
const sassMiddleware = require('node-sass-middleware')
const postcssMiddleware = require('postcss-middleware');
const autoprefixer = require('autoprefixer');

const app = express();

app.set('view engine', 'ejs');

// // need cookieParser middleware before we can do anything with cookies
// TODO: setup session generation to store sessionid in cookie
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.use(express.static(path.resolve(__dirname, '../react-client/dist')));

// sends server side rendered index
app.get('/', (req, res) => {
  res.render('pages',
    {
      title: 'ETSU PO Analytics - Main',
      path: '',
    }
  );
});
app.use(express.static(path.join(__dirname, '../react-client/dist')));

// default page
app.get('*', (req, res) => {
  console.log('test')
  res.redirect('/');
});
// endregion express routes

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening on port ${port}!`);
});
