const express = require('express');
const router = express.Router();
const { login ,refreshTokens} = require('../controllers/authController');

router.post('/login', login);
router.post('/refresh', refreshTokens);

module.exports = router;
