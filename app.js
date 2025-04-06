const express = require('express');
const cors = require('cors');
const db = require('./models');
require('dotenv').config();
const sequelize = require('./config/database');

const app = express();
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 服务器已启动，端口：${PORT}`);
});

app.use(cors());
app.use(express.json());

// 注册用户路由
app.use('/api/users', require('./routes/user.routes'));

// 测试根路由
app.get('/', (req, res) => {
    res.send('🔥 SkillHive API running');
});

// 数据库连接
sequelize.authenticate()
    .then(() => {
        console.log('✅ 成功连接 Supabase PostgreSQL 数据库');
    })
    .catch((err) => {
        console.error('❌ 无法连接数据库:', err.message || err);
    });

app.get('/ping', (req, res) => {
    res.send('pong 🏓');
});