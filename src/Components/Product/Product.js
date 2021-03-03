import React from 'react';
import './Product.css';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Product = (props) => {
    // console.log(props)
    const element = <FontAwesomeIcon icon={faCartPlus} />
    const {price, stock, name, seller, img, key} = props.product;
    return (
        <div className='product'>
            <div className="image-holder">
                <img src={img} alt=""/>
            </div>
            <div className="product-info">
                <h4><Link to={'/product/'+key}>{name}</Link></h4>
                <p><small>by: {seller}</small></p>
                <p>${price}</p>
                <p><small>only {stock} left in stock - order soon</small></p>
                {props.showAddToCart && <button 
                onClick={props.handleAddProduct}
                className='main-button'
                >
                    {element} Add to Cart
                </button>}
            </div>
        </div>
    );
};

export default Product;