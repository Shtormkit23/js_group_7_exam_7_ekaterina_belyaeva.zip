import React from 'react';

const Order = props => {
    return (
        <div className="order-details">
            <p>{props.order} x{props.quantity}  {props.price} KGS</p>
            <a id={props.id} className="button-remove" href="#" onClick={props.removeOrder}>delete</a>
        </div>
    );
};

export default Order;