import React from 'react';

const Loading = () => {
    return (
        <div >
            <div class="d-flex justify-content-center  ">
                <div style={{marginTop:"150px",marginBottom:"150px"}} class="spinner-border text-center text-warning " role="status">
                    <span class="visually-hidden">Loading</span>
                </div>
            </div>
        </div>
    );
};

export default Loading;