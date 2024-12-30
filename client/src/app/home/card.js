import React from 'react';

// Example data structure
const sampleData = [
  { 
    id: 1, 
    name: 'Item 1', 
    location: 'New York, USA', 
    description: 'This is a great place to enjoy outdoor activities with friends and family.', 
    imageUrl: '/images/turf3.jpg', 
    rating: 4.5 
  },
  { 
    id: 2, 
    name: 'Item 2', 
    location: 'Los Angeles, USA', 
    description: 'Experience the thrill of adventure sports at this iconic location.', 
    imageUrl: '/path/to/image2.jpg', 
    rating: 3.8 
  },
];

const Card = ({ item }) => {
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <>
        <span style={styles.star}>{'★'.repeat(fullStars)}</span>
        {halfStar && <span style={styles.star}>☆</span>}
        <span style={styles.emptyStar}>{'☆'.repeat(emptyStars)}</span>
      </>
    );
  };
  // const item =sampleData[0];
  const sample = { 
      id: 1, 
      name: 'Item 1', 
      location: 'New York, USA', 
      description: 'This is a great place to enjoy outdoor activities with friends and family.', 
      imageUrl: '/images/turf3.jpg', 
      rating: 4.5 
    };

  return (
    <div style={styles.card}>
      <img src={item.imageUrl || '/images/turf3.jpg'} alt={item.name} style={styles.cardImage} />
      <div style={styles.cardContent}>
        <h3 style={styles.cardTitle}>{item.name}</h3>
        <p style={styles.cardLocation}>{item.location}</p>
        <p style={styles.cardDescription}>{item.description}</p>
        <div style={styles.cardRating}>{renderStars(item.rating)}</div>
      </div>
    </div>
  );
};

export default Card;

const styles = {
  card: {
    height:'400px',
    width: '300px',
    backgroundColor: '#1a1a1a', // Dark background
    borderRadius: '12px',
    boxShadow: '0 6px 10px rgba(0, 0, 0, 0.5)', // Stronger shadow for dark theme
    overflow: 'hidden',
    textAlign: 'center',
    margin: '20px auto',
    transition: 'transform 0.3s, box-shadow 0.3s',
    cursor: 'pointer',
    border: '2px solid #fff',
  },
  cardImage: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
  },
  cardContent: {
    padding: '20px',
  },
  cardTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    margin: '10px 0',
    color: '#fff', // White text
  },
  cardLocation: {
    fontSize: '16px',
    color: '#aaaaaa', // Light gray for location
    margin: '5px 0',
  },
  cardDescription: {
    fontSize: '14px',
    color: '#cccccc', // Slightly brighter gray for descriptions
    margin: '10px 0',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  cardRating: {
    fontSize: '18px',
    color: '#ffa500', // Bright orange for stars
    marginTop: '10px',
  },
  star: {
    color: '#ffd700', // Gold for filled stars
  },
  emptyStar: {
    color: '#555555', // Dark gray for empty stars
  },
};
