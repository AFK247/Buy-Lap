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
            <div>
                <div>
                    <ul className="d-flex gap-5 p-4  justify-content-center">
                        {/* <li><Link className='btn btn-info' to="/dashboard">Dashbooard</Link></li> */}
                        {
                            isAdmin &&
                            <div>
                                <h2 className='text-center my-3'>Admin Panel</h2>
                                <Link className='btn btn-info ' to="/dashboard/allbuyers">All Buyers</Link>
                                <Link className='btn btn-info ms-4' to="/dashboard/allsellers">All Sellers</Link>
                                <Link className='btn btn-info ms-4' to="/dashboard/reported">Reported Items</Link>
                            </div>
                        }
                        {
                            isBuyer &&
                            <div>
                                <h2 className='text-center my-3'>Buyer Panel</h2>
                                <Link className='btn btn-info' to="/dashboard/buyers">Buyers</Link>
                            </div>
                        }
                        {
                            isSeller &&
                            <div>
                                <h2 className='text-center my-3'>Seller Panel</h2>
                                <Link className='btn btn-info' to="/dashboard/myproduct">My Product</Link>
                                <Link className='btn btn-info ms-4' to="/dashboard/addProduct">Add Product</Link>
                            </div>

                        }

                    </ul>
                </div>

                <div>
                    <Outlet></Outlet>
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Dashboard;