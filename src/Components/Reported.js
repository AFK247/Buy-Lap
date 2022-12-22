import { useQuery } from '@tanstack/react-query';
import React from 'react';
// import toast from 'react-hot-toast';

const Reported = () => {
    const { data: products = [], refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch('https://buy-lap-server-afk247.vercel.app/products');
            const data = await res.json();
            return data;
        }
    });



    return (
        <div>
            <h2 className='text-center'>All products</h2>
            <div className='d-flex justify-content-center'>
                <table className="table w-auto">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Location</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((user, i) => <tr key={user._id}>
                                <th>{i + 1}</th>
                                <td>{user.product_name}</td>
                                <td>{user.re_price}</td>
                                <td>{user.location}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default Reported;