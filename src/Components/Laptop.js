import React, { useContext } from 'react';
import toast, { Toaster } from 'react-hot-toast';
// import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthProvider';


const Laptop = ({ laptop }) => {
    const { user } = useContext(AuthContext);
    const { product_name, seller_name, pic, years, or_price, re_price, location, code } = laptop;

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
            status:"sold"
        }
        console.log(info);
        fetch(`http://localhost:5000/bookings`, {
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


    return (
        <div className="col">
            <div className="card">
                <img src={pic} className="card-img-top img-fluid" alt="..."></img>
                <div className="card-body">
                    <h4 className="card-title mb-2">Original Price: ${or_price}</h4>
                    <h4 className="card-title mb-2">Re-Sell Price: ${re_price}</h4>
                    <h4 className="card-title mb-2">Product Name: {product_name}</h4>
                    <Toaster position="top-center" reverseOrder={false} />
                    <div>
                        <span className="card-title mb-2 ">Seller Name: {seller_name}</span>
                        <i className="fa-solid fa-check ms-1 bg-primary rounded-5"></i>
                        <span data-bs-toggle="modal" data-bs-target="#exampleModal" className="btn btn-warning ms-3">Book Now</span>
                    </div>
                    <h5>Purchase Year: {years}</h5>
                    <h5>Location: {location}</h5>
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