const express = require('express');

const router = express. Router();

const turfController = require('../db/controllers/turfController.js');

router.get('/turfs', turfController.turfs);

router.post('/ownerTurfs', turfController.ownerTurfs);

router.post('/add', turfController.add);

router.post('/edit', turfController.edit);

module.exports = router;