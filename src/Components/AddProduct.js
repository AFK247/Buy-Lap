import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from './AuthProvider';

const AddProduct = () => {
    const {user}=useContext(AuthContext);
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const product_name = form.product_name.value
        const seller_name = form.seller_name.value
        const pic = form.pic.value
        const years = form.years.value
        const or_price = form.or_price.value
        const location = form.location.value
        const re_price = form.re_price.value
        const email = form.email.value
        const phone = form.phone.value
        const code = form.select1.value
        const condition = form.select2.value
        const details = form.details.value

        
        const product = {
            product_name,
            seller_name,
            pic,
            years,
            or_price,
            location,
            re_price,
            email,
            phone,
            code,
            condition,
            details,
            role:"seller",
            status:"available"
        }
        console.log(product);
        fetch(`http://localhost:5000/addProduct`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(newData => {
                if (newData.acknowledged)
                    alert("Product Succesfully Added");
                    window.location.href = '/dashboard/myProduct';
                    
            })
            .catch(er => console.error(er));

    }
    return (
        <div>
            <form onSubmit={handleSubmit} className="mb-md-2 mt-md-2 w-50 mx-auto">

                <h3 className="fw-bold my-4 text-uppercase text-center ">ADD New Product</h3>

                <div className="form-outline form-white mb-4">
                    <input placeholder='Product Name(Must be unique)' type="text" name="product_name" className="form-control form-control-lg" />
                </div>

                <div className="form-outline form-white mb-4">
                    <input placeholder='Seller Name' type="text" name="seller_name" className="form-control form-control-lg" />
                </div>

                <div className="form-outline form-white mb-4">
                    <input  placeholder='Image URL' type="text" name="pic" className="form-control form-control-lg" />
                </div>

                <div className="form-outline form-white mb-4">
                    <input placeholder='Years Used' type="text" name="years" className="form-control form-control-lg" />
                </div>

                <div className="form-outline form-white mb-4">
                    <input placeholder='Original Price' type="text" name="or_price" className="form-control form-control-lg" />
                </div>

                <div className="form-outline form-white mb-4">
                    <input placeholder='Location' type="text" name="location" className="form-control form-control-lg" />
                </div>

                <div className="form-outline form-white mb-4">
                    <input placeholder='Resell Price' type="text" name="re_price" className="form-control form-control-lg" />
                </div>

                <div className="form-outline form-white mb-4">
                    <input placeholder='Short Description' type="text" name="details" className="form-control form-control-lg" />
                </div>

                <div className="form-outline form-white mb-4">
                    <label>Select Laptop Catagory</label>
                    <select name="select1" class="form-select" aria-label="Default select example">
                        <option value="gl">Gaming</option>
                        <option value="bl">Business</option>
                        <option value="ol">Office</option>
                    </select>
                </div>
                <div className="form-outline form-white mb-4">
                    <label>Condition</label>
                    <select name="select2" class="form-select" aria-label="Default select example">
                        <option value="Excellent">Excellent</option>
                        <option value="Good">Good</option>
                        <option value="Fair">Fair</option>
                    </select>
                </div>

                <div className="form-outline form-white mb-4">
                    <input disabled defaultValue={user.email} placeholder='email' type="text" name="email" className="form-control form-control-lg" />
                </div>

                <div className="form-outline form-white mb-4">
                    <input placeholder='Phone Number' type="text" name="phone" className="form-control form-control-lg" />
                </div>
                <button className="btn btn-secondary" type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AddProduct;