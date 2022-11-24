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

    // const handleMakeAdmin = id => {
    //     fetch(`http://localhost:5000/users/admin/${id}`, {
    //         method: 'PUT', 
    //         headers: {
    //             authorization: `bearer ${localStorage.getItem('accessToken')}`
    //         }
    //     })
    //     .then(res => res.json())
    //     .then(data => {
    //         if(data.modifiedCount > 0){
    //             toast.success('Make admin successful.')
    //             refetch();
    //         }
    //     })
    // }

    return (
        <div>
            <h2 className='text-center'>All Users</h2>
            <div className='d-flex justify-content-center'>

                <table className="table w-50">
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
                            users.map((user, i) => <tr key={user._id}>
                                <th>{i + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user?.role}</td>
                                <td>{user?.role !== 'admin' && <button className='btn  btn-primary'>Make Admin</button>}</td>
                                <td><button className='btn btn-danger'>Delete</button></td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default AllUsers;