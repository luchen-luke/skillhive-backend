'use strict';
module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define('Project', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    client_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    tableName: 'projects',
    underscored: true,
  });

  return Project;
};
