const express = require('express');

const singupControler = require('../controllers/sinupControllers');

const router = express.Router();

router.get('/', singupControler.renderSinupPage);

router.post('/', singupControler.singupPost);

module.exports = router;
