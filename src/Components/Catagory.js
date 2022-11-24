import React from 'react';

const Catagory = () => {
    const fake=fetch("fake.json")
    return (
        <div>
            <h2>{fake.length}</h2>
        </div>
    );
};

export default Catagory;