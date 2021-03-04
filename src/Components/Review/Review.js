import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItems from '../Reviewitems/ReviewItems';

const Review = () => {
    const [cart, setCart] = useState([]);
    // load data from database
    useEffect(() => {
        // read cart data
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);

        // find the product from fakeData
        const cartProducts = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedCart[key];
            return product;
        })
        setCart(cartProducts);
    }, [])

    // remove items handler
    const removeItemHandler = (key) => {
        const newCart = cart.filter(pd => pd.key !== key);
        setCart(newCart);
        removeFromDatabaseCart(key);
    }

    return (
        <div>
            <div className="shop-container">
                <div className="product-container">
                    {
                        cart.map(pd => <ReviewItems
                            removeItemHandler={removeItemHandler}
                            product={pd}></ReviewItems>)
                    }
                </div>
                <div className="cart-container">
                    <Cart product={cart}></Cart>
                </div>
            </div>

        </div>
    );
};

export default Review;