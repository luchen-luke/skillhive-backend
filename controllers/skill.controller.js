const { Skill } = require('../models');

exports.createSkill = async (req, res) => {
    try {
        const { name, description } = req.body;
        const skill = await Skill.create({ name, description });
        res.status(201).json(skill);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Failed to create skill' });
    }
};

exports.getAllSkills = async (req, res) => {
    try {
        const skills = await Skill.findAll();
        res.status(200).json(skills);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Failed to retrieve skills' });
    }
};
