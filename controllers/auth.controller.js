// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const { User } = require('../models'); // 确保路径对，User 是 Sequelize 模型

// exports.register = async (req, res) => {
//     console.log('接收到的请求体:', req.body);

//     try {
//         const { username, email, password, role } = req.body;

//         // 简单验证
//         if (!username || !email || !password) {
//             return res.status(400).json({ message: 'All fields are required.' });
//         }

//         // 检查是否已存在邮箱
//         const existingUser = await User.findOne({ where: { email } });
//         if (existingUser) {
//             return res.status(409).json({ message: 'Email already in use.' });
//         }

//         const hashedPassword = await bcrypt.hash(password, 10);

//         const user = await User.create({
//             username,
//             email,
//             password: hashedPassword,
//             role,
//         });

//         res.status(201).json({
//             message: 'User registered successfully.',
//             user: {
//                 id: user.id,
//                 username,
//                 email,
//                 role,
//             }
//         });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Internal server error.' });
//     }
// };
const { User } = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
    try {
        const { username, email, password, role } = req.body;

        console.log('register body:', req.body);
        console.log('username =', username);

        if (!username || !email || !password || !role) {
            return res.status(400).json({ message: '所有字段不能为空' });
        }

        const existing = await User.findOne({ where: { email } });
        if (existing) return res.status(400).json({ message: '邮箱已注册' });

        const hashed = await bcrypt.hash(password, 10);
        const user = await User.create({
            username,
            email,
            password: hashed,
            role
        });

        res.status(201).json({ message: '注册成功', user: { id: user.id, username, email, role } });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: err.message });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ where: { email } });

        if (!user) {
            return res.status(400).json({ message: '用户不存在' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: '密码错误' });
        }

        const token = jwt.sign({ id: user.id }, 'your_jwt_secret', {
            expiresIn: '7d',
        });

        res.json({
            message: '登录成功',
            token,
            user: {
                id: user.id,
                username: user.username,
                email: user.email,
                role: user.role,
            },
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: '服务器错误' });
    }
};
