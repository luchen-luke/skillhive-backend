const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User } = require('../models'); // 确保路径对，User 是 Sequelize 模型

exports.register = async (req, res) => {
    console.log('接收到的请求体:', req.body);

    try {
        const { username, email, password } = req.body;
        console.log(req.body); // 确认 body 是什么

        // 简单验证
        if (!username || !email || !password) {
            return res.status(400).json({ message: 'All fields are required.' });
        }

        // 检查是否已存在邮箱
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            return res.status(409).json({ message: 'Email already in use.' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            username,
            email,
            password: hashedPassword
        });

        res.status(201).json({ message: 'User registered successfully.', user: { id: user.id, username, email } });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error.' });
    }
};
