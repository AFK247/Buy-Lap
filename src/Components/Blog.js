import React from 'react';
import useTitle from '../hooks/useTitle';
import pic2 from "./pic/last.jpg"
import pic3 from "./pic/road.jfif"

const Blog = () => {
    useTitle("Blog");
    return (
        <div className='container text-center'>
            <h2 className='text-danger my-4'>BLOG</h2>
            <div className="row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-2 p-1 g-5 d-flex justify-content-center">
                <div className="card text-bg-dark bg-white border-0">
                    <img src={pic2} className="card-img" alt="..."></img>
                    <div className="card-img-overlay d-flex flex-column justify-content-center m-4">
                        <h5 className=" text-warning card-title">Difference between SQL and NoSQL</h5>
                        <p className="card-text">SQL databases support Structured Query Languages but NonSQL does not have any declarative query language.SQL supports table based data type but NoSQL supports document oriented, graph databases, key value pair-based.</p>

                    </div>
                </div>

                <div className="card text-bg-dark bg-white border-0">
                    <img src={pic2} className="card-img" alt="..."></img>
                    <div className="card-img-overlay d-flex flex-column justify-content-center m-4">
                        <h5 className=" text-warning card-title">What is JWT, and how does it work?</h5>
                        <p className="card-text">JWTs or JSON Web Tokens are most commonly used to identify an authenticated user. They are issued by an authentication server and are consumed by the client-server . They work for only generating tokens and verifying them for authorization</p>

                    </div>
                </div>
                <div className="card text-bg-dark bg-white border-0">
                    <img src={pic3} className="card-img" alt="..."></img>
                    <div className="card-img-overlay d-flex flex-column justify-content-center m-4">
                        <h5 className=" text-warning card-title">What is the difference between javascript and NodeJS?</h5>
                        <p className="card-text">Javascript is a programming language but NodeJS is a Javascript runtime environment .Javascript is used on  client-side but node is  used on the server-side.Javascript can run in any browser engine but V8 is the Javascript engine inside of node js that parses</p>

                    </div>
                </div>
                <div className="card text-bg-dark bg-white border-0">
                    <img src={pic3} className="card-img" alt="..."></img>
                    <div className="card-img-overlay d-flex flex-column justify-content-center m-4">
                        <h5 className=" text-warning card-title">How does NodeJS handle multiple requests at the same time?</h5>
                        <p className="card-text">NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>

                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Blog;