import { useQuery } from '@tanstack/react-query';
import React from 'react';
// import toast from 'react-hot-toast';

const AllUsers = () => {
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/user');
            const data = await res.json();
            return data;
        }
    });

    const buyers = users.filter(user => user.role === "buyer");
    const sellers = users.filter(user => user.role === "seller");


    const handleDelete = (name) => {
        console.log("inside handle Delete email ",name);
        fetch(`http://localhost:5000/deleteUser/${name}`, {
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
            <h2 className='text-center'>All Users</h2>

            <div className='d-flex justify-content-center'>

                <table className="table w-auto">
                    <thead>
                    </thead>
                    <h3 className='my-5 mx-auto'>Buyers</h3>
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
                            buyers.map((user, i) => <tr key={user._id}>
                                <th>{i + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user?.role}</td>
                                <td><button onClick={() => handleDelete(user.email)} className='btn btn-danger'>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                    <h3 className='my-5 mx-auto'>Sellers</h3>
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th >Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Admin</th>
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
                                <td>{user?.role !== 'admin' && <button className='btn  btn-primary'>Make Admin</button>}</td>
                                <td><button onClick={() => handleDelete(user._id)} className='btn btn-danger'>Delete</button></td>
                            </tr>)
                        }
                    </tbody>


                </table>
            </div>
        </div>

    );
};

export default AllUsers;