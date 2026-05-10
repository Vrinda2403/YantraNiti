const Design = require('../models/Design');

exports.saveDesign = async (req, res) => {
    try {
        const design = await Design.create({
            ...req.body,
            user: req.user.id
        });

        res.status(201).json(design);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

exports.getDesigns = async (req, res) => {
    try {
        const designs = await Design.find({
            user: req.user.id
        });

        res.json(designs);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};