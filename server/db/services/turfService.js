const express = require('express');

const Turf = require('../models/turfModel');

const turfs = async (location, name) => {
    const pipeline = [
        {
            $match: {
                location: { $regex: location },
                name: { $regex: name },
            }
        }
    ]
    const turfList = await Turf.aggregate(pipeline);
    return turfList;
};

const ownerTurfs = async (owner) => {
    const entries = await Turf.find({ owner_id: owner });
    return entries;
};

const add = async (name, owner_id, location, image) => {
    const turf = new Turf({
        name: name, 
        owner_id: owner_id,
        location: location,
        image: image,
    });
    await turf.save();
}

const edit = async (id, name, owner_id, location, image) => {
    const updatedData = {
        name: name,
        location: location,
        owner_id: owner_id,
        image: image,
    };

    try {
        const result = await Turf.updateOne({ id: id }, { $set: updatedData });
        console.log('Entry updated successfully:', result);
    } 
    catch (error) {
        console.error('Error updating entry:', error);
    }
};

module.exports = { turfs, ownerTurfs, add, edit };