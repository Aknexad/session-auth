const data = require('../Model/db');

module.exports = {
  renderlogin: (req, res) => {
    res.render('login');
  },
  loginPost: (req, res) => {
    const info = req.body;

    if (info.username && info.password) {
      console.log('checkpoint1');
      const user = data.find(
        (user) =>
          user.username === info.username && user.password === info.password
      );
      console.log(user);

      if (user) {
        req.session.userId = user.id;
        res.redirect('/');
      } else {
        res.redirect('/login');
      }
    }
  },
};
