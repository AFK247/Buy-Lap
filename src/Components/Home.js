import React from 'react';

import useTitle from '../hooks/useTitle';

//Home Page

const Home = () => {
    useTitle("Home")
    

    return (

        <div>
           <h3>This is home</h3>
        </div>
    );
};

export default Home;