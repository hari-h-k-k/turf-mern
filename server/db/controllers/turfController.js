const express = require('express');

const turfService = require('../services/turfService.js');

const turfs = async (req, res) => {
    const location = req.body.location || '';
    const name = req.body.name || '';

    try {
        const turfList = await turfService.turfs(location, name);
        res.status(201).json(turfList);
    }

    catch (error) {
        res.status(400).json({ message: error.message });
    }

}

const ownerTurfs = async (req, res) => {
    const owner = req.body.owner_id || '';

    try {
        const turfList=await turfService.ownerTurfs(owner);
        res.status(201).json(turfList);
    }

    catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const add = async (req, res) => {

    const { name, owner_id, location, image } = req.body;
    try {

        await turfService.add(name, owner_id, location, image); 
        res.status(201).json({ message: 'Turf added successfully' });

    }

    catch (error) {
        res.status(400).json({ message: error.message });
    }

    

};

const edit = async (req, res) => {

    const { id, name, owner_id, location, image } = req.body;

    try {

        await turfService.edit(id, name, owner_id, location, image);

        res.status(201).json({ message: "Turf updated successfully" });

    }

    catch (error) {

        res.status(401).json({ message: error.message });

    }

};

module.exports = { turfs, ownerTurfs, add, edit };