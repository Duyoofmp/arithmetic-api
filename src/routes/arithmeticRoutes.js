const express = require('express');
const router = express.Router();
const { authenticate } = require('../middlewares/authMiddleware');
const { add, subtract, multiply, divide } = require('../controllers/arithmeticController');

router.post('/add', authenticate, add);
router.post('/subtract', authenticate, subtract);
router.post('/multiply', authenticate, multiply);
router.post('/divide', authenticate, divide);

module.exports = router;
