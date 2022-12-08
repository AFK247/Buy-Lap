import React from 'react';
import { Link } from 'react-router-dom';

const Allcat = ({ catagory }) => {
    const { code, cat_name, pic, details } = catagory;
    const id = code;
    return (
        <div>
            <div className="col">
                <div className="card shadow-lg">
                    <img style={{ backgroundColor: "rgb(220, 168, 105)" }} src={pic} className="card-img-top img-fluid" alt="..."></img>
                    <div className="card-body">
                        <h4 className="card-title">{cat_name}</h4>

                        <p>{details}</p>

                        <Link className="btn btn-warning" to={`/category/${id}`} >View Details<i className="fa-solid fa-arrow-right ms-1"></i></Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Allcat;