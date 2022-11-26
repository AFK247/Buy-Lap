import React from 'react';

const AdvertiseCard = ({advert}) => {
    const { condition,product_name, pic,location,re_price, details } = advert;
    console.log(advert);
    return (
        <div>
            <div className="col">
                <div className="card">
                    <img style={{ backgroundColor: "rgb(220, 168, 105)" }} src={pic} className="card-img-top img-fluid" alt="..."></img>
                    <div className="card-body">
                        <h4 className="card-title">{product_name}</h4>
                            <h6>Price: {re_price}</h6>
                            <h6>location: {location}</h6>
                            <h6>condition: {condition}</h6>
                            <p>{details}</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AdvertiseCard;