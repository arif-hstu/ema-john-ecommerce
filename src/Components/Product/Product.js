import React from 'react';
import './Product.css';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Product = (props) => {
    // console.log(props)
    const element = <FontAwesomeIcon icon={faCartPlus} />
    const {price, stock, name, seller, img} = props.product;
    return (
        <div className='product'>
            <div className="image-holder">
                <img src={img} alt=""/>
            </div>
            <div className="product-info">
                <h4>{name}</h4>
                <p><small>by: {seller}</small></p>
                <p>${price}</p>
                <p><small>only {stock} left in stock - order soon</small></p>
                <button 
                onClick={props.handleAddProduct}
                className='main-button'
                >
                    {element} Add to Cart
                </button>
            </div>
        </div>
    );
};

export default Product;