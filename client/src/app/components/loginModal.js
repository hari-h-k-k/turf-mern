"use client"
import React, { useState } from 'react';
import axiosInstance from '@/common/instance';
import { toast, ToastContainer,Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginModal = ({ isModalOpen, setIsModalOpen }) => {
    const [activeTab, setActiveTab] = useState('signin'); // 'signin' or 'signup'
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        role: 'user',
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
        axiosInstance
            .post(activeTab === 'signin' ? '/auth/signin' : '/auth/register', formData) // Replace '/auth' with your API endpoint
            .then((response) => {
                toast.success(response.data.message , {
                    autoClose: 2000, // Toast disappears after 3 seconds
                });
                console.log('Data posted successfully:', response.data);
                setIsModalOpen(false);
                // Handle success (e.g., show a success message or navigate to another page)
            })
            .catch((error) => {
                toast.error(
                    error.response?.message || 'An error occurred while submitting the form.', {
                    autoClose: 2000, // Toast disappears after 3 seconds
                });
                console.error('Error posting data:', error);
                // Handle error (e.g., show an error message)
            });

    };

    return (
        <>
            <div>

                {isModalOpen && (
                    <div style={styles.modalOverlay}>
                        <div style={styles.modal}>
                            <div style={styles.tabContainer}>
                                <button
                                    style={{
                                        ...styles.tab,
                                        border: activeTab === 'signin' ? '2px solid #fff' : 'none',
                                    }}
                                    onClick={() => setActiveTab('signin')}
                                >
                                    Sign In
                                </button>
                                <button
                                    style={{
                                        ...styles.tab,
                                        border: activeTab === 'signup' ? '2px solid #fff' : 'none'
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
                                {activeTab === 'signup' ?
                                    <div style={styles.radioGroup}>
                                        <label style={styles.radioLabel}>
                                            <input
                                                type="radio"
                                                name="role"
                                                value="user"
                                                onChange={handleInputChange}
                                                checked={formData.role === 'user'}
                                                style={styles.radioInput}
                                            />
                                            User
                                        </label>
                                        <label style={styles.radioLabel}>
                                            <input
                                                type="radio"
                                                name="role"
                                                value="owner"
                                                onChange={handleInputChange}
                                                checked={formData.role === 'owner'}
                                                style={styles.radioInput}
                                            />
                                            Owner
                                        </label>
                                    </div> : null}
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
            <ToastContainer transition={Flip}/>
        </>
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
        color: '#fff',
        border: '2px solid #fff',
        backgroundColor: '#000',
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
        color: '#000'
    },
    radioGroup: {
        display: 'flex',
        justifyContent: 'space-around',
        marginBottom: '15px',
    },
    radioLabel: {
        fontSize: '16px',
        cursor: 'pointer',
    },
    radioInput: {
        marginRight: '5px',
    },

    buttonGroup: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '20px',
    },
    submitButton: {
        padding: '10px 20px',
        backgroundColor: 'transparent',
        border: '2px solid #fff',
        color: '#fff',
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

export default LoginModal;
