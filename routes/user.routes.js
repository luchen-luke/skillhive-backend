const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middlewares/auth.middleware')
const { checkRole } = require('../middlewares/role.middleware')
// const userController = require('../controllers/user.controller');


router.get('/me', verifyToken, (req, res) => {
    res.json({ message: '已认证', user: req.user })
})

router.get('/admin-only', verifyToken, checkRole('admin'), (req, res) => {
    res.send('管理员可见资源')
})

// router.get('/', userController.getAllUsers);
// router.get('/:id', userController.getUserById);
// router.post('/', userController.createUser);
// router.put('/:id', userController.updateUser);
// router.delete('/:id', userController.deleteUser);

// module.exports = router;
const authController = require('../controllers/auth.controller');

router.post('/register', authController.register);
router.post('/login', authController.login);

module.exports = router;
