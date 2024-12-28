import { useState } from 'react';

// Example data structure
const sampleData = [
  { id: 1, name: 'Item 1', description: 'This is the description for Item 1', imageUrl: '/path/to/image1.jpg' },
  { id: 2, name: 'Item 2', description: 'This is the description for Item 2', imageUrl: '/path/to/image2.jpg' },
];

const Card = ({item}) => {
  return (
    
        <div style={styles.card}>
          <img src="/images/turf3.jpg" alt={item.name} style={styles.cardImage} />
          <div style={styles.cardContent}>
            <h3 style={styles.cardTitle}>{item.name}</h3>
          </div>
        </div>
  );
};

export default Card;

const styles = {
   card: {
      width: '250px',            // Width of each card
      backgroundColor: '#fff',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      overflow: 'hidden',
      textAlign: 'center',
      marginBottom: '20px',      // Space between cards in vertical direction
    },
    cardImage: {
      width: '100%',
      height: '200px',
      objectFit: 'cover',        // Ensures the image fits the container without distortion
    },
    cardContent: {
      padding: '15px',
    },
    cardTitle: {
      fontSize: '18px',
      fontWeight: 'bold',
      margin: '10px 0',
      color:'black'
    },
    cardDescription: {
      fontSize: '14px',
      color: '#555',
    },
  };
  