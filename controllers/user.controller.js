// controllers/user.controller.js

const db = require('../models');
const User = db.User;

// 获取所有用户
exports.findAll = async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        console.error('❌ 获取用户出错:', error);
        res.status(500).json({ message: '服务器错误' });
    }
};

// 创建新用户
exports.create = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;
        const newUser = await User.create({ name, email, password, role });
        res.status(201).json(newUser);
    } catch (error) {
        console.error('❌ 创建用户出错:', error);
        res.status(400).json({ message: '创建失败', error: error.message });
    }
};
