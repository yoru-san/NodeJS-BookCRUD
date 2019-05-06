const mongoose = require('mongoose');
const ObjectId = require('mongoose').Schema.Types.ObjectId;

const schema = mongoose.Schema({
    name: { type: String, required: true },
    location: {
        type: {
          type: String, // Don't do `{ location: { type: String } }`
          enum: ['Point'], // 'location.type' must be 'Point'
          required: true
        },
        coordinates: {
          type: [Number],
          required: true
        }
    },
});

const model = mongoose.model('Library', schema);
module.exports = model;