const express = require('express');
const session = require('express-session');
const _ = require('dotenv').config({ path: './config/.env' });

const index = require('./routers/index');
const sinup = require('./routers/sinup');
const login = require('./routers/login');
const { query } = require('express');

const app = express();

// meddeware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 100 * 60 * 10,
    },
  })
);

// set view engin
app.set('view engine', 'pug');

// routes
// app.get('/', (req, res) => {
//   if (req.session.page_views) {
//     req.session.page_views++;
//     res.send(`page views ${req.session.page_views}`);
//   } else {
//     req.session.page_views = 1;
//     res.send('Welcome to this page for the first time!');
//   }
// });
// app.get('/logout', (req, res) => {
//   req.session.destroy();
//   res.redirect('/');
// });
app.use('/', index);
app.use('/singup', sinup);
app.use('/login', login);

// server
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`server run on port ${port}`));
