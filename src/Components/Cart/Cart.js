import React from 'react';


const Cart = (props) => {
    const product = props.product;
    const totalPrice = product.reduce((total, product) => {
        return total += product.price*product.quantity;
        
    }, 0);
    return (        
        <div>
            <h4>This is cart</h4>
            <h5>Order Summary: {product.length}</h5>
            <h5>Item Total: {totalPrice}</h5>
            {
                props.children
            }

        </div>
    );
};

export default Cart;