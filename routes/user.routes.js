const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middlewares/auth.middleware')
const userController = require('../controllers/user.controller');


router.get('/me', verifyToken, (req, res) => {
    res.json({ message: '已认证', user: req.user })
})

router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.post('/', userController.createUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;
