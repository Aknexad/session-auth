const express = require('express');

const singupControler = require('../controllers/sinupControllers');

const router = express.Router();

router.get('/', singupControler.renderSinupPage);

module.exports = router;
