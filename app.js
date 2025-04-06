require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./models');

const app = express();

app.use(cors());
app.use(express.json());

// ✅ API 路由
app.use('/api/users', require('./routes/user.routes'));

// ✅ 启动服务器 & 数据库连接
const PORT = process.env.PORT || 3000;
db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`🚀 服务器已启动，端口：${PORT}`);
    });
});
