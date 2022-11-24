import React from 'react';
import useTitle from '../hooks/useTitle';
import About from './About';
import Advertise from './Advertise';
import Catagory from './Catagory';
import Slider from './Slider';



//Home Page

const Home = () => {
    useTitle("Home")


    return (
        <>
            <Slider></Slider>
            <Advertise></Advertise>
            <Catagory></Catagory>
            <About></About>

        </>
    );
};

export default Home;