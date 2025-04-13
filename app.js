require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./models');

db.sequelize.sync({ alter: true }) // 🔄 自动同步表结构
    .then(() => console.log('✅ 数据库表结构同步完成'))
    .catch((err) => console.error('❌ 表结构同步失败：', err));
const app = express();


app.use(cors({
    origin: 'http://localhost:5173', //Front-end development address
    credentials: true
}));
app.use(express.json());

// ✅ API 路由
app.use('/api/auth', require('./routes/auth.routes'));

app.use('/api/skills', require('./routes/skill.routes'));


// ✅ 启动服务器 & 数据库连接
const PORT = process.env.PORT || 3000;
db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`🚀 服务器已启动，端口：${PORT}`);
    });
});
