const data = require('../Model/db');

module.exports = {
  renderSinupPage: (req, res) => {
    res.render('sinup', { title: 'singup' });
  },
  // post requst to singup endpoint
  singupPost: (req, res) => {
    const newUser = {
      id: data.length + 1,
      username: req.body.username,
      password: req.body.password,
    };

    data.push(newUser);
    res.redirect('/login');
  },
};
