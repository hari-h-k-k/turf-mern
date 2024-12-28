"use client"
import React, { useState } from 'react';

const Test = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('signin'); // 'signin' or 'signup'
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
    setFormData({ username: '', password: '' }); // Reset form when modal is toggled
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`${activeTab} form submitted`, formData);
    handleModalToggle();
  };

  return (
    <div>
      <button style={styles.button} onClick={handleModalToggle}>
        My Button
      </button>

      {isModalOpen && (
        <div style={styles.modalOverlay}>
          <div style={styles.modal}>
            <div style={styles.tabContainer}>
              <button
                style={{
                  ...styles.tab,
                  backgroundColor: activeTab === 'signin' ? '#ddd' : '#fff',
                }}
                onClick={() => setActiveTab('signin')}
              >
                Sign In
              </button>
              <button
                style={{
                  ...styles.tab,
                  backgroundColor: activeTab === 'signup' ? '#ddd' : '#fff',
                }}
                onClick={() => setActiveTab('signup')}
              >
                Sign Up
              </button>
            </div>

            <form onSubmit={handleSubmit} style={styles.form}>
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleInputChange}
                style={styles.input}
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                style={styles.input}
                required
              />
              <div style={styles.buttonGroup}>
              <button type="button" style={styles.cancelButton} onClick={handleModalToggle}>
                  Cancel
                </button>
                <button type="submit" style={styles.submitButton}>
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
  },
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    backgroundColor: '#fff',
    borderRadius: '10px',
    width: '400px',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    textAlign: 'center',
  },
  tabContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    marginBottom: '20px',
  },
  tab: {
    padding: '10px 20px',
    border: '1px solid #ccc',
    cursor: 'pointer',
    flex: 1,
    textAlign: 'center',
    fontSize: '16px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    width: '100%',
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '20px',
  },
  submitButton: {
    padding: '10px 20px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  cancelButton: {
    padding: '10px 20px',
    backgroundColor: '#ccc',
    color: '#000',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default Test;
