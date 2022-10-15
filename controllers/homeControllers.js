const data = require('../Model/db');

module.exports = {
  randerHomePage: (req, res) => {
    const sessionId = req.session.userId;
    const user = data.find((user) => user.id === sessionId);
    let login = false;
    let name = '';
    if (sessionId) {
      login = true;
      name = user.username;
    }
    res.render('index.pug', {
      title: 'Novinverse projact',
      username: name,
      log: login,
    });
  },
};
