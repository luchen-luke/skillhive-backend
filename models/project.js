'use strict';

module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define('Project', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    skills_required: {
      type: DataTypes.JSON,
      allowNull: false
    },
    max_members: {
      type: DataTypes.INTEGER,
      defaultValue: 5
    },
    status: {
      type: DataTypes.ENUM('open', 'in_progress', 'completed'),
      defaultValue: 'open'
    },
    is_public: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  }, {
    tableName: 'projects',
    underscored: true
  });

  return Project;
};
