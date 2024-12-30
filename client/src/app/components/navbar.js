"use client";
import React, { useState, useContext } from 'react';
import LoginModal from './loginModal';
import { useAppContext } from '@/context';
import { useRouter } from 'next/navigation';

const Navbar = ({ setIsModalOpen }) => {
const router = useRouter();
  const { info, setInfo } = useAppContext();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLogin = () => {
    setIsModalOpen(true);
    console.log("Button Clicked"); // Debugging purpose
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const handleLogout = () => {
    // Logic to log out the user, clear info, etc.
    setInfo((prev) => ({
        ...prev, // Spread the previous state
        username: "", // Update username
        token: "", // Update token
        role: "user", // Update role or retain previous
    }));
    setIsDropdownOpen(false); // Close dropdown on logout
  };

  const handleProfileNav = () => {
    router.push('/profile');
  };

  return (
    <div style={styles.navbar}>
      <div style={styles.logoText}>Lockspot</div>
      {info.username ? (
        <div style={styles.userInfo}>
          <button style={styles.button} onClick={toggleDropdown}>
            {info.username}
          </button>
          {isDropdownOpen && (
            <div style={styles.dropdown}>
              <button style={styles.dropdownItem} onClick={handleProfileNav}>My Profile</button>
              <button style={styles.dropdownItem} onClick={handleLogout}>Logout</button>
            </div>
          )}
        </div>
      ) : (
        <button style={styles.button} onClick={handleLogin}>Sign In</button>
      )}
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
    margin: "10px",
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
  userInfo: {
    position: 'relative',
  },
  dropdown: {
    position: 'absolute',
    top: '40px', // Position it below the button
    right: '0',
    backgroundColor: '#333',
    borderRadius: '5px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.3)',
    zIndex: 100,
    width: '200px',
  },
  dropdownItem: {
    padding: '10px 20px',
    backgroundColor: 'transparent',
    color: '#fff',
    border: 'none',
    width: '100%',
    textAlign: 'left',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  dropdownItemHover: {
    backgroundColor: '#555',
  },
};

export default Navbar;
