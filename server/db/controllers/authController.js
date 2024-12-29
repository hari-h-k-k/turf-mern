const express = require('express');

const authService = require('../services/authService.js');

const register = async (req, res) => {
    const { username, password, role } = req.body;

    try {

        const { token, user } =await authService.register(username, password, role);

        res.status(201).json({ message: 'User registered successfully', username:user.username, token:token, role:user.role });

    }

    catch (error) {
        res.status(400).json({ message: error.message });

    }

};

const signin = async (req, res) => {

    const { username, password } = req.body;

    try {

        const { token, user } = await authService.signin(username, password); res.json({ message: "Signin successful!", username:user.username, token:token, role:user.role });

    }

    catch (error) {
        console.log(error)
        res.status(401).json({ message: error.message });

    }
};

module.exports = { register, signin };