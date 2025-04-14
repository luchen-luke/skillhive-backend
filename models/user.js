'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'user',
    },
  }, {
    tableName: 'users', // ✅ 强制使用小写表名
    underscored: true, // ✅ 自动将 created_at、updated_at 命名为下划线形式
  });

  return User;
};
