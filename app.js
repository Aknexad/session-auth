const express = require('express');

const index = require('./routers/index');
const sinup = require('./routers/sinup');
const login = require('./routers/login');

const app = express();

// meddeware
app.use(express.json());

// set view engin
app.set('view engine', 'pug');

// routes
app.use('/', index);
app.use('/singup', sinup);
app.use('/login', login);

// server
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`server run on port ${port}`));
