// const express = require('express');
// const router = express.Router();
// const authController = require('../controllers/auth.controller');

// router.post('/register', authController.register);
// router.post('/login', authController.login);

// module.exports = router;
const { verifyToken } = require('../middlewares/auth.middleware')
const { checkRole } = require('../middlewares/role.middleware')
const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller'); // ✅ 路径对

router.get('/me', verifyToken, (req, res) => {
    res.json({ message: '已认证', user: req.user })
})

router.get('/admin-only', verifyToken, checkRole('admin'), (req, res) => {
    res.send('管理员可见资源')
})



router.post('/register', authController.register); // ✅ register 是函数引用
router.post('/login', authController.login)

module.exports = router;
