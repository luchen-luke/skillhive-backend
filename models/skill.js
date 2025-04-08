module.exports = (sequelize, DataTypes) => {
    const Skill = sequelize.define('Skill', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
    });

    Skill.associate = (models) => {
        // Skill 与 User 多对多可加：Skill.belongsToMany(models.User, { through: 'UserSkills' });
    };

    return Skill;
};
