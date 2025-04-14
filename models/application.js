'use strict';
module.exports = (sequelize, DataTypes) => {
  const Application = sequelize.define('Application', {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    project_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: 'pending',
    },
  }, {
    tableName: 'applications',
    underscored: true,
  });

  return Application;
};
