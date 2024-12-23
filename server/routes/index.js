const express = require('express');

const router = express.Router();

const auth = require('./authRoute.js');

const app = express();

app.use('/auth', auth);

module.exports = app;