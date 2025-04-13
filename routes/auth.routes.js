// const express = require('express');
// const router = express.Router();
// const authController = require('../controllers/auth.controller');

// router.post('/register', authController.register);
// router.post('/login', authController.login);

// module.exports = router;

const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller'); // ✅ 路径对

router.post('/register', authController.register); // ✅ register 是函数引用

module.exports = router;
