// require('dotenv').config();
// const express = require('express');
// const cors = require('cors');
// const db = require('./models');
// const { FORCE } = require('sequelize/lib/index-hints');

// db.sequelize.sync({ force: true }) // ❗开发环境可用，正式环境禁用！
//     .then(() => console.log('✅ 表结构已强制重建完成'))
//     .catch(err => console.error('❌ 表结构同步失败: ', err));
// const app = express();


// app.use(cors({
//     origin: 'http://localhost:5173', //Front-end development address
//     credentials: true
// }));
// app.use(express.json());

// // ✅ API 路由
// app.use('/api/auth', require('./routes/auth.routes'));

// app.use('/api/skills', require('./routes/skill.routes'));


// // ✅ 启动服务器 & 数据库连接
// const PORT = process.env.PORT || 3000;
// db.sequelize.sync().then(() => {
//     app.listen(PORT, () => {
//         console.log(`🚀 服务器已启动，端口：${PORT}`);
//     });
// });
require('dotenv').config(); // 加载 .env 环境变量

const express = require('express');
const cors = require('cors');
const db = require('./models'); // 自动导入所有模型

const app = express();


// ✅ 允许前端访问的 CORS 设置（例如 Vue 项目端口5173）
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}));

// ✅ 允许解析 JSON 请求体
app.use(express.json());

// ✅ 注册路由
app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/skills', require('./routes/skill.routes'));
// 可扩展更多路由，比如 projects、applications 等

// ✅ 数据库同步（强制重建 + 顺序控制，确保外键正确）
(async () => {
    try {
        await db.sequelize.sync({ force: true }); // ⚠️ 开发环境使用 force:true，生产改为 alter:true

        // 🧱 手动同步模型，确保按顺序（因为 Application 依赖 User 和 Project）
        await db.User.sync();
        await db.Project.sync();
        await db.Application.sync();
        await db.Skill.sync();
        // 如果还有 Skill 等，也按顺序追加

        console.log('✅ 数据库表结构同步完成');

        // ✅ 启动服务器
        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => {
            console.log(`🚀 服务器已启动，端口：${PORT}`);
        });
    } catch (err) {
        console.error('❌ 数据库结构同步失败：', err);
    }
})();
