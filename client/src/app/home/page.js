// pages/index.js
"use client";
import Head from 'next/head';
import SearchBar from './search';
import Navbar from '../components/navbar';
import { useState, useEffect } from 'react';
import axiosInstance from '@/common/instance';
import Card from './card';
import LoginModal from '../components/loginModal';

export default function Home() {

    const [searchKey, setSearchKey] = useState("");

    const sampleData = [
        { id: 1, name: 'Card 1' },
        { id: 2, name: 'Card 2' },
        { id: 3, name: 'Card 3' },
    ];

    const [data, setData] = useState();

    const [isModalOpen, setIsModalOpen] = useState(false);


    useEffect(() => {
        axiosInstance
            .get('/turf/turfs') // Replace with the actual endpoint you want to hit
            .then(response => setData(response.data))
            .catch(error => console.error('Error fetching data: ', error));
    }, [searchKey]);

    return (
        <div style={styles.container}>
            <Head>
                <title>Scrollable Page with Navbar</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>


            <Navbar setIsModalOpen={setIsModalOpen} />

            <LoginModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />

            <div style={styles.mainContent}>
                <SearchBar searchKey={searchKey} setSearchKey={setSearchKey} />

                <div style={styles.scrolledContent}>
                    {data && Array.isArray(data) && data.map((item) => (
                        <Card key={item._id || item.index} item={item} />
                    ))}
                </div>

            </div>
        </div>
    );
}

const styles = {
    container: {
        height: '100vh',
        overflowY: 'scroll',
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/images/turf2.jpg")',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        fontFamily: 'Arial, sans-serif',
        color: '#fff',
    },
    navbar: {
        position: 'relative',
        top: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        padding: '10px 20px',
        textAlign: 'center',
        zIndex: 1000,
    },
    mainContent: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '50px',
    },
    searchBarWrapper: {
        marginBottom: '50px',
    },
    searchBar: {
        width: '300px',
        padding: '10px',
        borderRadius: '20px',
        border: 'none',
        outline: 'none',
        textAlign: 'center',
        fontSize: '16px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    },
    scrolledContent: {
        display: 'flex',
        flexWrap: 'wrap',          // Enables the wrapping of cards to the next row
        justifyContent: 'space-evenly', // Distributes space evenly between cards
        gap: '20px',               // Adds space between the cards
        padding: '10px',           // Padding around the container
        width: '80%',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
    },
    paragraph: {
        marginBottom: '15px',
        fontSize: '18px',
        lineHeight: '1.6',
    },
};
