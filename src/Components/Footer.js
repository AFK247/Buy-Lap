import React from 'react';
import { Link } from 'react-router-dom';

//This is footer
const Footer = () => {
    return (
        <div  className='mx-3'>
            <footer className="bg-dark text-white mt-5">
                <div className="row row-cols-lg-4 row-cols-md-4 row-cols-sm-2 row-cols-2 p-4 text-center g-4">
                    <div className="col">
                        <h3 className=" mb-4 fw-bolder">Service</h3>

                        <p>The servide of pro Photographer is very good . We are always trusted and reliable .People come to to give review .So see the reviews and take the decision.We will be glad to get hired </p>
                    </div>
                    <div className="col">
                        <h3 className=" mb-4 fw-bolder">PRODUCTS</h3>

                        <p>Animal Photo</p>
                        <p>River Photo</p>
                        <p>Food Photo</p>
                        <p>Forest Photo</p>
                    </div>
                    <div className="col">
                        <h3 className="mb-4 fw-bolder">CONTACT</h3>

                        <p><i className="fas fa-home mr-3"></i> New York, NY 10012, US</p>
                        <p><i className="fas fa-envelope mr-3"></i> info@gmail.com</p>
                        <p><i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
                        <p><i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
                    </div>
                    <div className="col d-flex flex-column">
                        <h2 className="fw-bolder">Follow US</h2>

                        <p><Link href="#" className="text-decoration-none fab fa-facebook fs-3"></Link></p>
                        <p><Link href="#" className="text-danger text-decoration-none  fab fa-twitter fs-3"></Link></p>
                        <p><Link href="#" className="text-warning text-decoration-none  fab fa-linkedin fs-3"></Link></p>
                        <p><Link href="#" className="text-info text-decoration-none  fab fa-pinterest fs-3"></Link></p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;