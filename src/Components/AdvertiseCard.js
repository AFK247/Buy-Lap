import React from 'react';
import toast, { Toaster } from 'react-hot-toast';

const AdvertiseCard = ({ advert }) => {
    const { condition, product_name, pic, location, re_price, details } = advert;
    console.log(advert);
    const offer=()=>{
        toast.success("50% discount. Grab your Laptop NOW!!");
    }
    return (
        <div class="col">
            <div class="card h-100 shadow-lg">
                <img style={{height:"46%"}} src={pic} class="card-img-top" alt="laptop_image"></img>
                <div class="card-body">
                    <div class="clearfix mb-3">
                        <span class="float-start badge rounded-pill bg-primary fs-6">{product_name}</span>
                        <span class="float-end price-hp p-1 border rounded border-2">{re_price}$</span>
                        <span class="float-end price-hp p-1 text-danger text-decoration-line-through">{re_price*2}$</span>
                        
                    </div>
                    <p class="card-title mb-3">{details}</p>
                    <h6><span class="fw-normal fst-italic">Condition:</span> {condition}</h6>
                    <h6><span class="fw-normal fst-italic">Location:</span> {location}</h6>
                    <ul class="list-inline small">
                        <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                        <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                        <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                        <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                        <li class="list-inline-item m-0"><i class="fa fa-star-o text-success"></i></li>
                    </ul>
                    <div> <button onClick={offer} class="btn btn-outline-primary fw-bold">Check offer</button> </div>
                </div>
            </div>
            
        </div>
    );
};

export default AdvertiseCard;