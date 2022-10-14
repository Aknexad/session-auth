const data = require('../Model/db');

module.exports = {
  renderlogin: (req, res) => {
    res.render('login');
  },

  // post requset to login endpoint
  loginPost: (req, res) => {
    const info = req.body;

    if (info.username && info.password) {
      const user = data.find(
        (user) =>
          user.username === info.username && user.password === info.password
      );

      if (user) {
        req.session.userId = user.id;
        res.redirect('/');
      } else {
        res.redirect('/singup');
      }
    }
  },
};
