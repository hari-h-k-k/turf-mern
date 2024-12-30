import React from 'react';

const AddCard = () => {
  return (
    <div style={addCardStyles.card}>
      <div style={addCardStyles.plusSign}>+</div>
    </div>
  );
};

export default AddCard;

const addCardStyles = {
  card: {
    width: '300px',
    height: '300px',
    backgroundColor: '#1a1a1a', // Dark background
    borderRadius: '12px',
    boxShadow: '0 6px 10px rgba(0, 0, 0, 0.5)', // Strong shadow
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '20px auto',
    cursor: 'pointer',
    transition: 'transform 0.3s, box-shadow 0.3s',
  },
  plusSign: {
    fontSize: '100px',
    color: '#aaa', // Light gray color
    fontWeight: 'bold',
    textAlign: 'center',
  },
};
