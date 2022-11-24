import React from 'react';
import { Link } from 'react-router-dom';
import pic from "./pic/about.png"

const About = () => {
    return (
        <div>
            <section className="col-10 m-auto my-5 ">
                <div className="row d-flex mx-4 flex-lg-row  flex-md-column-reverse flex-sm-column-reverse flex-column-reverse">

                    <div className="col-lg-6 col-md-11 col-sm-11 mt-4">
                        <h6 className="text-danger">Welcome To Pro Course</h6>
                        <h2>We are always Faster & Reliable</h2>
                        <hr style={{ border: "2px solid red", backgroundColor: "red" }} className="col-4  " />
                        <p>Pro Course is one of the successful learning platform in the modern world.It was established in 2012 in Rangpur with the intention to teach people and student to be able to be good at different CSE skills .Now a days it is a must to have these skills.So one should always try to learn different skills .SO are you ready? What are your waiting form .Try our courses</p>
                        <Link className="btn btn-danger rounded-pill mb-5" to="/courses">Browse Course</Link>
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