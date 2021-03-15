import React from 'react';
import './ReviewItems.css'

const ReviewItems = (props) => {
    const { name, quantity, key } = props.product;

    // get removeItemHandler from props
    const removeItemHandler = props.removeItemHandler;
    return (
                <>
                <h4 >{name}</h4>
                <p>Quantity: {quantity}</p>
                <button
                    onClick={() => removeItemHandler(key)}
                    className='main-button'>Remove</button>
                </>
    );
};

export default ReviewItems;