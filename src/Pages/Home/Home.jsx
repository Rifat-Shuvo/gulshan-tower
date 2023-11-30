import React from 'react';
// import Banner from '../../Components/Banner';
import Carousel from '../../Components/Carousel';
import Header from '../../Components/Header';
import Features from './Features';
import Conatct from './Conatct';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <Header subheading={'Why Our Building is Best'} heading={'Features'}></Header>
            <Features></Features>
            <Conatct></Conatct>
        </div>
    );
};

export default Home;