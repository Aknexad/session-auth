const express = require('express');

const loginController = require('../controllers/loginControllers');

const router = express.Router();

router.get('/', loginController.renderlogin);

router.post('/', loginController.loginPost);

module.exports = router;
