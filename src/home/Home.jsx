import React from 'react';
import Quotes from './Quotes';
import Banner from './Banner';
import './home.css';
import Trending from './Trending';
const Home = () => {
    return (
        <>
            <Banner />
            <Quotes />
            <Trending />
        </>
    );
};

export default Home;
