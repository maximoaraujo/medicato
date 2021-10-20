import React, { Fragment } from 'react';
import Navbar from '../components/home/Navbar';
import Banner from '../components/home/Banner';
import Search from '../components/home/Search';
import MenuContent from './MenuContent';

const Home = () => {
    return(
        <Fragment>
            <Navbar />
            <Banner />
            <Search />
            <MenuContent />
        </Fragment>
    )
};

export default Home;