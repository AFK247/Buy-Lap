import { useQuery } from '@tanstack/react-query';
import React from 'react';
// import toast from 'react-hot-toast';

const Allsellers = () => {
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://buy-lap-server.vercel.app/user');
            const data = await res.json();
            return data;
        }
    });

    const sellers = users.filter(user => user.role === "seller");


    const handleDelete = (emailAdd) => {
        console.log("inside handle all seller Delete email ",emailAdd);
        fetch(`https://buy-lap-server.vercel.app/deleteSeller/${emailAdd}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(newData => {
                if (newData.deletedCount > 0) {
                    alert("suceessfully Deleted")
                }
            })
    }



    return (
        <div>
            <h2 className='text-center'>All Sellers</h2>

            <div className='d-flex justify-content-center'>

                <table className="table w-auto">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th >Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            sellers.map((user, i) => <tr key={user._id}>
                                <th>{i + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user?.role}</td>
                                <td><button onClick={() => handleDelete(user.email)} className='btn btn-danger'>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default Allsellers;