import React from 'react';
import { Link } from 'react-router-dom';

const Laptop = ({ laptop }) => {
    const { product_name, seller_name, pic, years, or_price, re_price, location, code } = laptop;
    return (
        <div className="col">

            <div className="card">
                <img src={pic} className="card-img-top img-fluid" alt="..."></img>
                <div className="card-body">
                    <h4 className="card-title mb-2">Original Price: ${or_price}</h4>
                    <h4 className="card-title mb-2">Re-Sell Price: ${re_price}</h4>
                    <h4 className="card-title mb-2">Product Name: {product_name}</h4>
                    <div>
                        <span className="card-title mb-2 ">Seller Name: {seller_name}</span>
                        <i className="fa-solid fa-check ms-1 bg-primary rounded-5"></i>
                        <span className="btn btn-warning ms-3">Book Now</span>
                    </div>
                    <h5>Purchase Year: {years}</h5>
                    <h5>Location: {location}</h5>

                </div>
            </div>
        </div>
    );
};

export default Laptop;