const express = require('express');

const router = express.Router();

const auth = require('./authRoute.js');
const turf =require('./turfRoute.js');

const app = express();

app.use('/auth', auth);
app.use('/turf', turf);

module.exports = app;