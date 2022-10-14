const express = require('express');

const app = express();

// set view engin
app.set('view engine', 'pug');

// meddeware
app.use(express.json());

// routes
app.get('/', (req, res) => {
  res.render('index.pug', { title: 'Novinverse projact', username: '' });
});

// server
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`server run on port ${port}`));
