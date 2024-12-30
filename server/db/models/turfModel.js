const mongoose = require('mongoose');

const turfSchema = new

    mongoose.Schema({

        name: { type: String, required: true },

        owner_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },

        location: { type: String, required: true },

        image: { type: Buffer },

        rating: { type: Number, default: 0 },

        created_at: { type: Date, default: Date.now },

    });

const Turf = mongoose.model('Turf', turfSchema);

module.exports = Turf;