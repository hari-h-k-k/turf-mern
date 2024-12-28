const express = require('express');

const router = express.Router();

const auth = require('./authRoute.js');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello, Lockspot!');
});

app.use('/auth', auth);

module.exports = app;