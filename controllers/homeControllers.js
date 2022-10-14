const data = require('../Model/db');

module.exports = {
  randerHomePage: (req, res) => {
    const sessionId = req.session.userId;
    const user = data.find((user) => user.id === sessionId);
    if (!sessionId) return res.redirect('/login');
    res.render('index.pug', {
      title: 'Novinverse projact',
      username: user.username,
    });
  },
};
