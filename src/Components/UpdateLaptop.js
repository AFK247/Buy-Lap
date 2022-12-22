import React from 'react';
import { useLoaderData } from 'react-router-dom';


const UpdateLaptop = () => {
    const item = useLoaderData();
    console.log(item);
    const {_id,product_name,
        seller_name,
        pic,
        years,
        or_price,
        location,
        re_price,
        phone,
        details}=item

    const handleUpdate = event => {
        event.preventDefault();
        const form = event.target;
        const product_name = form.product_name.value
        const seller_name = form.seller_name.value
        const pic = form.pic.value
        const years = form.years.value
        const or_price = form.or_price.value
        const location = form.location.value
        const re_price = form.re_price.value
        const phone = form.phone.value
        const details = form.details.value

        
        const product = {
            product_name,
            seller_name,
            pic,
            years,
            or_price,
            location,
            re_price,
            phone,
            details
        }
        fetch(`https://buy-lap-server-afk247.vercel.app/dashboard/updateLaptop/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(newData => {
                if (newData.acknowledged)
                    alert("Product Updated Added");
                    window.location.href = '/dashboard/myProduct';
                    
            })
            .catch(er => console.error(er));



    }
    return (
        <div>
            <form onSubmit={handleUpdate} className="mb-md-2 mt-md-2 w-50 mx-auto">

                <h3 className="fw-bold my-4 text-uppercase text-center ">Update Product</h3>

                <div className="form-outline form-white mb-4">
                    <input defaultValue={product_name} placeholder='Product Name(Must be unique)' type="text" name="product_name" className="form-control form-control-lg" />
                </div>

                <div className="form-outline form-white mb-4">
                    <input defaultValue={seller_name} placeholder='Seller Name' type="text" name="seller_name" className="form-control form-control-lg" />
                </div>

                <div className="form-outline form-white mb-4">
                    <input defaultValue={pic} placeholder='Image URL' type="text" name="pic" className="form-control form-control-lg" />
                </div>

                <div className="form-outline form-white mb-4">
                    <input defaultValue={years} placeholder='Years Used' type="text" name="years" className="form-control form-control-lg" />
                </div>

                <div className="form-outline form-white mb-4">
                    <input defaultValue={or_price} placeholder='Original Price' type="text" name="or_price" className="form-control form-control-lg" />
                </div>

                <div className="form-outline form-white mb-4">
                    <input defaultValue={location} placeholder='Location' type="text" name="location" className="form-control form-control-lg" />
                </div>

                <div className="form-outline form-white mb-4">
                    <input defaultValue={re_price} placeholder='Resell Price' type="text" name="re_price" className="form-control form-control-lg" />
                </div>

                <div className="form-outline form-white mb-4">
                    <input defaultValue={details} placeholder='Short Description' type="text" name="details" className="form-control form-control-lg" />
                </div>

                <div className="form-outline form-white mb-4">
                    <input defaultValue={phone} placeholder='Phone Number' type="text" name="phone" className="form-control form-control-lg" />
                </div>
                <button className="btn btn-secondary" type="submit">Submit</button>
            </form>
        </div>
    );
};

export default UpdateLaptop;