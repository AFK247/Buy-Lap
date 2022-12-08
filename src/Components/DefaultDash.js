import React from 'react';
import dashpic from "./pic/default.jpg"

const DefaultDash = () => {
    return (
        <div className='text-center'>
            <h1 style={{fontFamily:"cursive",fontStyle:"oblique"}}>Welcome to dashboard</h1>
            <img className='img-fluid col-8' src={dashpic} alt="dashboard" />
        </div>
    );
};

export default DefaultDash;