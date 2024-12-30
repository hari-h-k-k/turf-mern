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
      height: '400px',
      width: '300px',
      backgroundColor: '#1a1a1a', // Dark background
      borderRadius: '12px',
      boxShadow: '0 6px 10px rgba(0, 0, 0, 0.5)', // Stronger shadow for dark theme
      overflow: 'hidden',
      margin: '20px auto',
      transition: 'transform 0.3s, box-shadow 0.3s',
      cursor: 'pointer',
      border: '2px solid #fff',
      display: 'flex', // Enable flexbox
      alignItems: 'center', // Vertically center
      justifyContent: 'center', // Horizontally center
    },
    plusSign: {
      fontSize: '100px',
      color: '#aaa', // Light gray color
      fontWeight: 'bold',
    },
  };
  