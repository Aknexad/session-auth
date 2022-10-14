const express = require('express');
const session = require('express-session');
const _ = require('dotenv').config({ path: './config/.env' });

const index = require('./routers/index');
const sinup = require('./routers/sinup');
const login = require('./routers/login');
const logout = require('./routers/logout');

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

app.use('/', index);
app.use('/singup', sinup);
app.use('/login', login);
app.use('/logout', logout);

// server
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`server run on port ${port}`));
