const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name: { type: String, required: true },
    location: {
        type: {
            type: String,
            enum: ['Point'],
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        }
    },
});

schema.index({ location: '2dsphere' });

const model = mongoose.model('Library', schema);
module.exports = model;