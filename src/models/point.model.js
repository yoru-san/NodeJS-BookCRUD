const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: String,
    location: {
        type: { type: String, default: 'Point' },
        coordinates: { type: [Number], default: [0, 0] }
    }
});
const model = mongoose.model('GeoPoint', schema);
module.exports = model;