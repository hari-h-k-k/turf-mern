// components/Navbar.js
"use client";
import React, { useState } from 'react';
import LoginModal from './loginModal';
const Navbar = ({setIsModalOpen}) => {

    const handleLogin = () => {
        setIsModalOpen(true);
        console.log("Button Clicked"); // Debugging purpose

      };

    return (
        <div style={styles.navbar}>
            <div style={styles.logoText}>Lockspot</div>
            <button style={styles.button} onClick={handleLogin}>SignIn</button>
        </div>
    );
};

const styles = {
    navbar: {
        position: 'relative',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        height: '10vh',  // Increased height
        padding: '10px',
        textAlign: 'center',
        zIndex: 1000,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between', // Spreads out content horizontally
    },
    logoText: {
        fontWeight: 'bold',            // Make the text bold
        color: '#fff',                 // White color to match your navbar
        margin: "10px"
    },
    button: {
        position: 'relative',
        padding: '8px 16px',
        fontSize: '16px',
        backgroundColor: 'transparent',
        color: '#fff',
        border: '2px solid #fff',
        cursor: 'pointer',
    },
};

export default Navbar;
