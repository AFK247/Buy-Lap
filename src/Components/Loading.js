import React from 'react';

const Loading = () => {
    return (
        <div>
            <div class="d-flex justify-content-center">
                <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading</span>
                </div>
            </div>
        </div>
    );
};

export default Loading;