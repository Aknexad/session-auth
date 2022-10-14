const express = require('express');

const index = require('./routers/index');

const app = express();

// meddeware
app.use(express.json());

// set view engin
app.set('view engine', 'pug');

// routes
app.use('/', index);

// server
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`server run on port ${port}`));
