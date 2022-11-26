import React from 'react';
import error from "./pic/error.jpg"

const ErrorRoute = () => {
    return (
        <div className='d-flex mt-5 flex-column justify-content-center'>
            <h1 className='text-center'>Errroor!!!404 Page not Found</h1>
            <img className='mx-auto' style={{height:"600px",width:"800px"}} src={error} alt="" />
        </div>
    );
};

export default ErrorRoute;