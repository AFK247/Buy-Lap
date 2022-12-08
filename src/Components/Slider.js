import React from 'react';
import pic1 from "./pic/pic1.png"
import pic2 from "./pic/pic2.png"
import pic3 from "./pic/pic3.png"

const Slider = () => {
    return (
        <div >
            <section className='mt-5'>
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner d-flex ">
                        <div className="carousel-item active">
                            <img s src={pic1} className="d-block w-50 mx-auto" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src={pic2} className="d-block w-50 mx-auto" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src={pic3} className="d-block w-50 mx-auto" alt="..."/>
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