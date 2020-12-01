import React from 'react';

const Heading = (props) => {
    return (
        <div>
            <div className="row">
                <div className="col text-center mb-4">
                    <h1 className="display-4">{props.title}</h1>
                </div>
            </div>
        </div>
    );
};

export default Heading;