import React from 'react';
import { Link } from 'react-router-dom';
import pic from "./pic/about.png"

const About = () => {
    return (
        <div>
            <section className="col-10 m-auto my-5 ">
                <div className="row d-flex mx-4 flex-lg-row  flex-md-column-reverse flex-sm-column-reverse flex-column-reverse">

                    <div className="col-lg-6 col-md-11 col-sm-11 mt-4">
                        <h6 className="text-danger">Welcome To Buy Lap</h6>
                        <h2>We are always Faster & Reliable</h2>
                        <hr style={{ border: "2px solid red", backgroundColor: "red" }} className="col-4  " />
                        <p>Buy Lap is one of the successful E-commerce platform in the modern world.It was established in 2012 in Rangpur with the intention to sell used laptop to people and student .Now a days it became very popular to buy and sell used laptops .Try our Laptops</p>
                        <Link className="btn btn-danger rounded-pill mb-5" to="/">Browse Laptop</Link>
                    </div>

                    <div className="col-lg-6 col-md-11 col-sm-11">
                        <img className="img-fluid " src={pic} alt=""></img>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default About;