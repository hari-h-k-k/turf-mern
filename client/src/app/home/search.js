// components/SearchBar.js
"use client";
import { useState } from 'react';

export default function SearchBar({ searchKey, setSearchKey }) {

  const handleSearch = (e) => {
    setSearchKey(e.target.value);
    console.log(`Search Query: ${e.target.value}`); // Debugging purpose
  };

  return (
    <div style={styles.container}>
      <input
        type="text"
        value={searchKey}
        onChange={handleSearch}
        placeholder="Search here..."
        style={styles.input}
      />
      <button style={styles.button} onClick={() => alert(`Searching for: ${searchKey}`)}>
        Search
      </button>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    padding: '20px',
    backgroundColor: 'transparent',
    color: '#fff',
    border: '2px solid #fff',
    maxWidth: '500px',
    margin: '0 auto',
    marginBottom:'40px'
  },
  input: {
    flex: 1,
    padding: '10px',
    backgroundColor: 'transparent',
    color: '#fff',
    border: '2px solid #fff',
    fontSize: '16px',
  },
  button: {
    padding: '10px 20px',
    border: 'none',
    backgroundColor: 'transparent',
    color: '#fff',
    border: '2px solid #fff',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  buttonHover: {
    backgroundColor: '#0056b3',
  },
};
