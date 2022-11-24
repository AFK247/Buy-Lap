import React from 'react';
import pic from "./pic/about.png"

const Slider = () => {
    return (
        <div>
            <section>
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner d-flex ">
                        <div className="carousel-item active">
                            <img s src={pic} className="d-block w-50 mx-auto" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src={pic} className="d-block w-50 mx-auto" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src={pic} className="d-block w-50 mx-auto" alt="..."/>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon bg-info" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon bg-info" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Slider;