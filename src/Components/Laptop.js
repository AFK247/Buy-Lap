import React, { useContext } from 'react';
import toast, { Toaster } from 'react-hot-toast';
// import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthProvider';


const Laptop = ({ laptop }) => {
    const { user } = useContext(AuthContext);
    const { product_name, condition, seller_name, pic, years, or_price, re_price, location, code, details } = laptop;

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const displayName = form.displayName.value;
        const product_name = form.product_name.value;
        const re_price = form.re_price.value;
        const locate = form.location.value;
        const phone = form.phone.value;

        const info = {
            displayName,
            email,
            product_name,
            price: re_price,
            place: locate,
            phone,
            code,
            pic,
            status: "sold"
        }
        console.log(info);
        fetch(`https://buy-lap-server.vercel.app/bookings`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(info)
        })
            .then(res => res.json())
            .then(newData => {
                if (newData.acknowledged)
                    toast("Booking confirmed");
            })
            .catch(er => console.error(er));

    }
    const offer = () => {
        toast.success("50% discount. Grab your Laptop NOW!!");
    }

    return (
        <div className="col">
            <div class="card shadow-lg">
                <img style={{height:"30vh"}} src={pic} class="card-img-top" alt="laptop_image"></img>
                <div class="card-body">
                    <div class="clearfix mb-3">
                        <span class="float-start badge rounded-pill bg-primary fs-6">{product_name}</span>
                        <span class="float-end price-hp p-1 border rounded border-2">{re_price}$</span>
                        <span class="float-end price-hp p-1 text-danger text-decoration-line-through">{re_price * 2}$</span>

                    </div>
                    <p class="card-title mb-3">{details}</p>
                    <h6><span class="fw-normal fst-italic">Condition:</span> {condition}</h6>
                    <h6><span class="fw-normal fst-italic">Location:</span> {location}</h6>
                    <h6><span class="fw-normal fst-italic">Years Used:</span> {years} yrs</h6>
                    <h6><span class="fw-normal fst-italic">Seller:</span> {seller_name}</h6>
                    <ul class="list-inline small">
                        <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                        <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                        <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                        <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                        <li class="list-inline-item m-0"><i class="fa fa-star-o text-success"></i></li>
                    </ul>
                    <div class="my-4">
                        <button onClick={offer} class="btn btn-outline-primary fw-bold">Offer</button>
                        <span data-bs-toggle="modal" data-bs-target="#exampleModal" className="btn btn-outline-primary fw-bold ms-3">Book Now</span>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="ModalLabel">{product_name}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div id="details" className="modal-body">
                            <form onSubmit={handleSubmit} className="mb-md-2 mt-md-2 ">

                                <h2 className="fw-bold mb-2 text-uppercase">Complete the form</h2>


                                <div className="form-outline form-white mb-4">
                                    <input disabled defaultValue={user.displayName} type="text" name="displayName" className="form-control form-control-lg" />
                                </div>

                                <div className="form-outline form-white mb-4">
                                    <input disabled defaultValue={user.email} type="email" name="email" className="form-control form-control-lg" />
                                </div>

                                <div className="form-outline form-white mb-4">
                                    <input disabled defaultValue={product_name} type="text" name="product_name" className="form-control form-control-lg" />
                                </div>

                                <div className="form-outline form-white mb-4">
                                    <input disabled defaultValue={re_price} type="text" name="re_price" className="form-control form-control-lg" />
                                </div>

                                <div className="form-outline form-white mb-4">
                                    <input placeholder='Location' type="text" name="location" className="form-control form-control-lg" />
                                </div>

                                <div className="form-outline form-white mb-4">
                                    <input placeholder='Phone Number' type="text" name="phone" className="form-control form-control-lg" />
                                </div>
                                <button className="btn btn-secondary" data-bs-dismiss="modal" type="submit">Submit</button>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Laptop;