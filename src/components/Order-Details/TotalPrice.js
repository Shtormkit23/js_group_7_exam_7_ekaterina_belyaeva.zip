import React from 'react';

const TotalPrice = props => {
    return (
        <div className="order-details">
            <p>Total price: {props.total} KGS</p>
        </div>
    );
};

export default TotalPrice;