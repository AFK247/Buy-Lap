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
                        <h5 className=" text-warning card-title">What are the different ways to manage a state in a React application?</h5>
                        <p className="card-text">In React apps, there are at least seven ways to handle the state.It is recommended to avoid storing such information in the app’s state to avoid the URL in our app getting out of sync.The second option is to store the state in the browser via web storage.</p>

                    </div>
                </div>

                <div className="card text-bg-dark bg-white border-0">
                    <img src={pic2} className="card-img" alt="..."></img>
                    <div className="card-img-overlay d-flex flex-column justify-content-center m-4">
                        <h5 className=" text-warning card-title"> How does prototypical inheritance work?</h5>
                        <p className="card-text">The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</p>

                    </div>
                </div>
                <div className="card text-bg-dark bg-white border-0">
                    <img src={pic3} className="card-img" alt="..."></img>
                    <div className="card-img-overlay d-flex flex-column justify-content-center m-4">
                        <h5 className=" text-warning card-title"> What is a unit test? Why should we write unit tests?</h5>
                        <p className="card-text">Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation. This testing methodology is done during the development process by the software developers. The main objective of unit testing is to isolate written code to test and determine if it works as intended.</p>

                    </div>
                </div>
                <div className="card text-bg-dark bg-white border-0">
                    <img src={pic3} className="card-img" alt="..."></img>
                    <div className="card-img-overlay d-flex flex-column justify-content-center m-4">
                        <h5 className=" text-warning card-title">React vs. Angular vs. Vue?</h5>
                        <p className="card-text">React is a UI library, Angular is a fully-fledged front-end framework, while Vue.js is a progressive framework.React can be used as a UI library to render elements, without enforcing a specific project structure, and that’s why it’s not strictly a framework.The Vue.js core library focuses on the View layer only.</p>

                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Blog;