import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthProvider';
import logo from "./pic/logo.png"
import './hover.css'

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    //Header with conditionals

    return (
        <nav className="navbar navbar-dark navbar-expand-lg navbar-expand-md navbar-expand-sm bg-dark ">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse text-center" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <img style={{ height: "36px", marginTop: "9px" }} src={logo} alt="" />
                        </li>
                        <li className="nav-item ">
                            <Link className="text-warning nav-link active fs-4 fw-bolder design" aria-current="page" to="/">Buy Lap</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link text-warning active home fs-4 ms-3 hover" to="/">Home</Link>
                        </li>

                        <>
                            {user?.email ?
                                <li className="nav-item">
                                    <Link onClick={handleLogOut} className="nav-link text-info active home fs-4 ms-3" to="/">Log Out</Link>
                                </li>
                                :
                                <li className="nav-item">
                                    <Link className="nav-link text-info active home fs-4 ms-3 hover" to="/login">Log In</Link>
                                </li>}
                        </>
                        {user?.photoURL &&
                            <li className="nav-item ">
                                <p className='d-flex justify-content-center'><img className=' ms-3 mt-2 rounded-circle' style={{ height: '31px' }} src={user?.photoURL} alt="pic"></img></p>
                            </li>}
                            
                            
                    </ul>
                    <form className="margin d-flex justify-content-center m-2 m-lg-0 m-md-0 m-sm-0" role="search">
                        <Link className="btn btn-outline-warning me-4" to="/dashboard">Dashboard</Link>
                        <Link className="btn btn-outline-warning rounded-pill" to="/blog">Blog</Link>
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default Header;