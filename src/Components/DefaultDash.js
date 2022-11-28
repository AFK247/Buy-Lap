import React from 'react';
import dashpic from "./pic/default.jpg"

const DefaultDash = () => {
    return (
        <div className='text-center'>
            <h3> Click Above</h3>
            <h1 >Welcome to dashboard</h1>
            <img className='img-fluid' src={dashpic} alt="sdad" />
        </div>
    );
};

export default DefaultDash;