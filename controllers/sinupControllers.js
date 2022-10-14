module.exports = {
  renderSinupPage: (req, res) => {
    const tt = req.query.username;
    res.render('sinup', { title: tt });
  },
};
