import React from 'react';
import Quotes from './Quotes';
import Banner from './Banner';
import './home.css';
import Trending from './Trending';
import TrendingLinks from '../Components/TrendingLinks';
import ArticleOne from '../Components/ArticleOne';
import ClubJoinBanner from '../Components/ClubJoinBanner';
import ArticleTwo from '../Components/ArticleTwo';
import Promos from '../Components/Promos';


const Home = () => {
    return (
        <>
            <Banner />
            <Quotes />
            <Trending />
            <Promos />
            {/* <TrendingLinks /> */}
            {/* <ArticleOne /> */}
            {/* <ArticleTwo /> */}
            {/* <ClubJoinBanner /> */}
        </>
    );
};

export default Home;
