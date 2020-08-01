import React from 'react';

const Item = props => {
    return (
        <div className="item">
            <button className="btn-item" onClick={props.newOrder}>
                <p>{props.item}</p>
                <p>Price: {props.price} KGZ</p>
            </button>
        </div>
    );
};

export default Item;