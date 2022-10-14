const express = require('express');

const indexControler = require('../controllers/homeControllers');

const router = express.Router();

router.get('/', indexControler.randerHomePage);

module.exports = router;
