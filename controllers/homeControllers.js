module.exports = {
  randerHomePage: (req, res) => {
    res.render('index.pug', {
      title: 'Novinverse projact',
      username: '',
      log: false,
    });
  },
};
