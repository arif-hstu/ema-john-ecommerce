import React from 'react';
import fakeData from '../../fakeData/index';
import { useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';


const Shop = () => {
    const first10 = fakeData.slice(0, 250);
    const [products, setProducts] = useState(first10);

    let [product, setProduct] = useState([]);
    const handleAddProduct = (prod) => {
        setProduct([...product, prod]);
    }
    
    return (
        <div className='shop-container'>
            <div className='product-container'>
               {
                   products.map((pro, idx) => <Product showAddToCart={true} key={idx} product={pro} handleAddProduct={() => handleAddProduct(pro)}></Product>)
               }
            </div>

            <div className="cart-container">
               <Cart product={product}></Cart>
            </div>
        </div>
    );
};

export default Shop;