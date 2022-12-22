import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';

const Buyers = () => {
    const { user,logOut } = useContext(AuthContext);
    console.log(user.email);
    const { data: buyers = [] } = useQuery({
        queryKey: ['buyers'],
        queryFn: async () => {
            const res = await fetch(`https://buy-lap-server-afk247.vercel.app/buyer/${user?.email}`, {
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
    return (
        <div>
        <h2 className='text-center'>Buyers</h2>
        <div className='d-flex justify-content-center'>
        {buyers?.length===0?
                <h1 style={{height:"33vh"}}>No Product Found</h1>
                :
        <table style={{height:"33vh"}} className="table w-auto">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th >Name</th>
                    <th>Email</th>
                    <th>Product</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>

              
                    {
                        buyers.map((item, i) => <tr key={item._id}>
                            <th>{i + 1}</th>
                            <td>{item.displayName}</td>
                            <td>{item.email}</td>
                            <td>{item.product_name}</td>
                            <td>{item.price}</td>
                        </tr>)
                    }
                
               
            </tbody>
        </table>}
    </div>
    </div>
    );
};

export default Buyers;