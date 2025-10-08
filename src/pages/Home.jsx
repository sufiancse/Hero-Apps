import React from 'react';
import Banner from '../components/Banner';
import Hero from '../components/Hero';
import TrendingApps from '../components/TrendingApps';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Hero></Hero>
            <TrendingApps></TrendingApps>
        </div>
    );
};

export default Home;