import React from 'react';
import Banner from './Banner/Banner';
import HowItWorks from './HowItWorks/HowItWorks';
import OurServices from './OurServices/OurServices';
import Brands from './Brands/Brands';
import Reviews from './Review/Reviews';
import ActiveServices from './ActiveService/ActiveServices';

const reviewPromise = fetch('/reviews.json').then(res => res.json())

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <HowItWorks></HowItWorks>
            <OurServices></OurServices>
            <Brands></Brands>
            <ActiveServices></ActiveServices>
            <Reviews reviewPromise={reviewPromise}></Reviews>
        </div>
    );
};

export default Home;