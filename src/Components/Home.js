import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../hooks/useTitle';
import About from './About';
import Advertise from './Advertise';
import Catagory from './Catagory';
import Slider from './Slider';



//Home Page

const Home = () => {
    useTitle("Home");
    const advertise=useLoaderData();
    const len=advertise.length;
    console.log(len);
    return (
        <>
            <h1 className='text-center text-danger mt-3'>WELCOME TO BUY LAP</h1><br></br>
            <Slider></Slider>
            {len && <Advertise advertise={advertise}></Advertise>}
            <Catagory></Catagory>
            <About></About>

        </>
    );
};

export default Home;