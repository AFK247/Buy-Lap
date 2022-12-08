import React from 'react';
import AdvertiseCard from './AdvertiseCard';

const Advertise = ({ advertise }) => {
    console.log(advertise);
    return (
        <div className='p-5'>
            <h1 className='text-info text-center  my-5'>Advertised Items</h1>
            
            <div class="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-3 g-5">

                    {
                        advertise.map(advert => <AdvertiseCard key={advert._id} advert={advert} />)
                    }

                </div>
            

            {/* <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 g-3 p-3 container m-auto"></div> */}
        </div>
    );
};

export default Advertise;
