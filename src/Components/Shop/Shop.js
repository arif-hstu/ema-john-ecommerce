import React, { useEffect } from 'react';
import fakeData from '../../fakeData/index';
import { useContext,useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager'
import { Link } from 'react-router-dom';
import { ProductsContext } from '../../App'

const Shop = () => {
    const allProducts = fakeData.slice(0, 250);
    const [products, setProducts] = useContext(ProductsContext);


    // get data form database based on useEffect
    useEffect(() => {
        setProducts(allProducts);
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const previousCart = productKeys.map(existingKey => {
            const product = fakeData.find( pd => pd.key === existingKey);
            product.quantity = savedCart[existingKey];
            return product;
        })
        setCart(previousCart);
    }, []);

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
               <Cart product={cart}>
                   <Link to='/review'><button> Order Review</button></Link>
               </Cart>
            </div>
        </div>
    );
};

export default Shop;