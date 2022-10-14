module.exports = {
  renderlogin: (req, res) => {
    const tt = req.query.username;
    res.render('login');
  },
};
