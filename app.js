const express = require('express');
const cors = require('cors');
require('dotenv').config();
const db = require('./models');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 初始化数据库
db.sequelize.sync().then(() => {
    console.log('✅ Database synced.');
}).catch(err => {
    console.error('❌ Sync failed:', err.message);
});

// 路由加载
app.use('/api/users', require('./routes/user.routes'));
app.use('/api/projects', require('./routes/project.routes'));
// ...

app.get('/', (req, res) => {
    res.send('SkillHive API is running...');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
});
