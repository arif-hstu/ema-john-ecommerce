import React from 'react';
import fakeData from '../../fakeData/index';
import { useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDatabaseCart } from '../../utilities/databaseManager'

const Shop = () => {
    const first10 = fakeData.slice(0, 250);
    const [products, setProducts] = useState(first10);

    let [cart, setCart] = useState([]);

    const handleAddProduct = (product) => {
        let count = 1;
        const toBeAdded = product.key;
        const sameProduct = cart.find(pd => pd.key === product.key);
        let newCart;
        if(sameProduct){
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const others = cart.filter(pd => pd.key !== toBeAdded);
            newCart = [...others, sameProduct]
        } else {
            product.quantity = 1;
            newCart = [...cart, product]
        }
        setCart(newCart);


        // count the product number
        addToDatabaseCart(product.key, count);
    }
    
    return (
        <div className='shop-container'>
            <div className='product-container'>
               {
                   products.map((pro, idx) => 
                    <Product 
                        showAddToCart={true} 
                        key={idx} 
                        product={pro} 
                        handleAddProduct={() => 
                            handleAddProduct(pro)}>
                    </Product>)
               }
            </div>

            <div className="cart-container">
               <Cart product={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;