// routes/user.routes.js

const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

// 路由定义
router.get('/', userController.findAll);
router.post('/', userController.create);

module.exports = router;
