// models/project.model.js
module.exports = (sequelize, DataTypes) => {
    const Project = sequelize.define('Project', {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
        },
        title: { type: DataTypes.STRING, allowNull: false },
        description: { type: DataTypes.TEXT, allowNull: false },
        skills_required: { type: DataTypes.JSON, allowNull: false },
        max_members: { type: DataTypes.INTEGER.UNSIGNED, defaultValue: 5 },
        status: {
            type: DataTypes.ENUM('open', 'closed', 'completed'),
            defaultValue: 'open',
        },
        is_public: { type: DataTypes.BOOLEAN, defaultValue: true },
        created_at: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
    }, {
        tableName: 'projects',
        timestamps: false,
    });

    return Project;
};
