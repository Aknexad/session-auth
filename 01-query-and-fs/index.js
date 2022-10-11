const express = require('express');
const fs = require('fs');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  if (req.query.firstName && req.query.lastName !== 'undefined') {
    const fullName = `${req.query.firstName} ${req.query.lastName}`;
    const logger = fs.createWriteStream('log.txt', { flags: 'a' });
    logger.write(`${fullName},`);
    res.redirect('/');
  } else {
    res.send('Hmoe Page');
  }
});

app.listen(8080, () => console.log('conacte to server'));
