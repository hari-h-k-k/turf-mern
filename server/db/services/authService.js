const express = require('express');

const User = require('../models/userModel');

const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');

const saltRounds = 10;

const register = async (username, password, role) => {

    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const user = new User({ username, password: hashedPassword, role }); 
    await user.save();
}
const signin = async (username, password) => {

    const user = await User.findOne({ username });

    if (!user || !(await bcrypt.compare(password, user.password))) { 
        throw new Error('Invalid credentials'); 
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
    return { token, user };

};

module.exports = { register, signin };