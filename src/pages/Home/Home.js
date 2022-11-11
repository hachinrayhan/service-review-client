import React from 'react';
import { Helmet } from 'react-helmet-async';
import Contents from './Contents';
import Slider from './Slider';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>HR's Windows - Home</title>
            </Helmet>
            <Slider></Slider>
            <Contents></Contents>
        </div>
    );
};

export default Home;