const express = require('express');

const router = express.Router();

const authController=require('../db/controllers/authController.js');

router.get('/', (req, res) => {
    const items = [

        { id: 1, name: 'John' }, { id: 2, name: 'Doe' }, { id: 3, name: 'Jane' }, { id: 4, name: 'Roe' } , { id: 5, name: 'Tony' }, { id: 6, name: 'Stark' }

    ];

    res.json(items);

});

router.post('/register', authController.register);


router.post('/signin', authController.signin);

module.exports = router;