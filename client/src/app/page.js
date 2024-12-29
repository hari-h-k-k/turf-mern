"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

const Welcome = () => {
  const router = useRouter();

  const handleGetStartedClick = () => {
    router.push('/home'); // Navigate to the desired route
  };

  return (
    <div style={styles.hero}>
      <div style={styles.heroContent}>
        <h1 style={styles.mainHeading}>Your Turf, Your Way</h1>
        <div style={styles.heroName}>
          <h1>LockSpot</h1>
        </div>
        <h2 style={styles.subHeading}>Discover | Connect | Play</h2>
        <p style={styles.description}>
          Find and book the best sports facilities near you. Showcase your space for events and activities, and connect with others who share your passion for the game. LockSpot makes it easy to get started.
        </p>
        <button
          style={styles.button}
          onMouseEnter={(e) => applyHoverStyle(e.target, true)}
          onMouseLeave={(e) => applyHoverStyle(e.target, false)}
          onClick={handleGetStartedClick} // Add the onClick handler to navigate
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

const applyHoverStyle = (element, isHover) => {
  element.style.transform = isHover ? 'scale(1.1)' : 'scale(1)';
  element.style.backgroundColor = isHover ? '#005f99' : '#00aaff';
  element.style.boxShadow = isHover
    ? '0 6px 12px rgba(0, 0, 0, 0.3)'
    : '0 4px 8px rgba(0, 0, 0, 0.2)';
};

const styles = {
  hero: {
    backgroundImage:
      'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("/images/turf2.jpg")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minWidth: '100vw',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    textShadow: '0 2px 4px rgba(0, 0, 0, 0.8)',
    fontFamily: '"Roboto", sans-serif', // Use a nice default font
  },
  heroContent: {
    width: '70%',
    textAlign: 'center',
    padding: '40px 20px',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    borderRadius: '20px',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
    marginBottom: '50px',
  },
  mainHeading: {
    fontSize: '3rem',
    marginBottom: '30px',
    fontWeight: 'bold',
    letterSpacing: '2px', // Adds a bit of space between letters for a clean look
    textTransform: 'uppercase', // Makes the main heading uppercase for emphasis
    fontFamily: '"Poppins", sans-serif', // Modern font for the main heading
  },
  heroName: {
    border: '2px solid #00aaff',
    color: '#00aaff',
    padding: '12px 25px',
    borderRadius: '12px',
    margin: '30px auto',
    display: 'inline-block',
    fontSize: '2.5rem',
    fontFamily: '"Poppins", sans-serif', // Modern font for the name
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  subHeading: {
    fontSize: '1.8rem',
    margin: '20px 0',
    fontFamily: '"Lato", sans-serif', // Lighter font for the subheading
    fontWeight: '500',
    color: '#f1f1f1',
  },
  description: {
    fontSize: '1.2rem',
    lineHeight: '1.8',
    marginBottom: '30px',
    fontFamily: '"Lato", sans-serif', // Clean, readable font
    color: '#f1f1f1',
  },
  button: {
    border: 'none',
    backgroundColor: '#00aaff',
    color: '#fff',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    padding: '15px 40px',
    borderRadius: '30px',
    cursor: 'pointer',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    transition: 'all 0.3s ease-in-out',
    fontFamily: '"Poppins", sans-serif', // Matching font for the button
    letterSpacing: '1px',
  },
};

export default Welcome;
