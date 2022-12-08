import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

const Sellers = () => {
    const { user } = useContext(AuthContext);
    const { data: sellers = [], refetch } = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/seller/${user?.email}`);
            const data = await res.json();
            return data;
        }
    });

    function advertiseHandeler(item) {
        console.log(item);
        fetch(`http://localhost:5000/advertise`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(item)
        })
            .then(res => res.json())
            .then(newData => {
                if (newData.acknowledged)
                    alert("Successfully Advertied in Homepage")
            })
            .catch(er => console.error(er));
    }

    const handleDelete = itemName => {
        console.log("inside handle Delete",itemName);
        fetch(`http://localhost:5000/myProductDelete/${itemName}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(newData => {
                if (newData.deletedCount > 0) {
                    alert("suceessfully Deleted");
                }
            })
    }


    return (
        <div>
            <div className='d-flex justify-content-center'>

                <table className="table w-auto">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th >Product Name</th>
                            <th>Seller Name</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Delete</th>
                            <th>Advertise</th>
                            <th>Update</th>

                        </tr>
                    </thead>
                    <tbody>


                        {
                            sellers.map((item, i) => <tr key={item._id}>
                                <th>{i + 1}</th>
                                <td>{item.product_name}</td>
                                <td>{item.seller_name}</td>
                                <td>${item.re_price}</td>
                                <td>{item.status}</td>
                                <td><button onClick={() => handleDelete(item.product_name)} className='btn btn-danger'>Delete</button></td>
                                <td><button onClick={() => advertiseHandeler(item)} className='btn btn-info'>Advertise</button></td>
                                <td><Link to={`/dashboard/updateLaptop/${item._id}`} className='btn btn-warning'>Update</Link></td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Sellers;