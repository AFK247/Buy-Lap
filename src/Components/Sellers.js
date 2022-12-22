import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

const Sellers = () => {
    const { user,logOut} = useContext(AuthContext);
    const { data: sellers = []} = useQuery({
        queryKey: ['sellers',user?.email],
        queryFn: async () => {
            const res = await fetch(`https://buy-lap-server-afk247.vercel.app/seller?email=${user?.email}`, {
                headers: {
                   authorization: `bearer ${localStorage.getItem('accessToken')}` 
                }
            });
            if(res.status===401 || res.status===403){
                logOut();
            }
            const data = await res.json();
            return data;

        }
    });

    function advertiseHandeler(item) {
        console.log(item);
        fetch(`https://buy-lap-server-afk247.vercel.app/advertise`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(item)
        })
            .then(res => res.json())
            .then(newData => {
                if (newData.acknowledged)
                    alert("Successfully Advertised in Homepage")
            })
            .catch(er => console.error(er));
    }

    const handleDelete = itemName => {
        console.log("inside handle Delete",itemName);
        fetch(`https://buy-lap-server-afk247.vercel.app/myProductDelete/${itemName}`, {
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
            <div className='d-flex justify-content-center align-items-center'>

                {sellers?.length===0?
                <h1 style={{height:"33vh"}}>No Product Found</h1>
                :
                <table style={{height:"33vh"}} className="table w-auto">
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
                }
            </div>
        </div>
    );
};

export default Sellers;