const mongoose = require('mongoose');

const designSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },

    title: String,

    latitude: Number,
    longitude: Number,

    geometryData: Object,

    planetaryData: Object

}, {
    timestamps: true
});

module.exports = mongoose.model('Design', designSchema);