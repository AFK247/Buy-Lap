import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';
import useBuyer from '../hooks/useBuyer';
import useSeller from '../hooks/useSeller';
import { AuthContext } from './AuthProvider';
import Footer from './Footer';
import Header from './Header';

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    const [isBuyer] = useBuyer(user?.email);
    const [isSeller] = useSeller(user?.email);
    return (
        <div>
            <Header></Header>
            <div className='row container p-5 m-auto'>
                <div className='col-4 '>
                        {
                            isAdmin &&
                            <div className=' text-center '>
                                <h2 className='text-center my-3'>Admin Panel</h2>
                                <li className='list-unstyled mt-4'><Link className='btn btn-info' to="/dashboard/allbuyers">All Buyers</Link></li>
                                <li className='list-unstyled mt-4'><Link className='btn btn-info' to="/dashboard/allsellers">All Sellers</Link></li>
                                <li className='list-unstyled mt-4'><Link className='btn btn-info' to="/dashboard/reported">Reported Items</Link></li>
                            </div>
                        }
                        {
                            isBuyer &&
                            <div className=' text-center '>
                                <h2 className='text-center my-3'>Buyer Panel</h2>
                                <li className='list-unstyled mt-4'><Link className='btn btn-info' to="/dashboard/buyers">Buyers</Link></li>
                                
                            </div>
                        }
                        {
                            isSeller &&
                            <div className=' text-center '>
                                <h2 className='text-center my-3'>Seller Panel</h2>
                                <li className='list-unstyled mt-4'><Link className='btn btn-info' to="/dashboard/myproduct">My Product</Link></li>
                                <li className='list-unstyled mt-4'><Link className='btn btn-info' to="/dashboard/addProduct">Add Product</Link></li>
                                
                            </div>

                        }

                </div>

                <div className='col-8'>
                    <Outlet></Outlet>
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Dashboard;