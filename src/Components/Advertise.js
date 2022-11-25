import React from 'react';
import AdvertiseCard from './AdvertiseCard';

const Advertise = ({advertise}) => {
    console.log(advertise);
    return (
        <div>
            <h1 className='text-info text-center  mt-5'>Advertised Items</h1>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 g-3 p-3 container m-auto">
                {
                    advertise.map(advert => <AdvertiseCard key={advert._id} advert={advert} />)
                }
            </div>
        </div>
    );
};

export default Advertise;
