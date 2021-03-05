import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItems from '../Reviewitems/ReviewItems';
import thanksImage from '../../images/thanks.jpg'

const Review = () => {
    const [cart, setCart] = useState([]);

    // useState to set giphy image after ReviewItems
    const [orderPlaced, setOrderPlaced] = useState(false);
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

    // place order handler to clear database and cart
    const handlePlaceOrder = () => {
        setCart([]);
        processOrder();
        setOrderPlaced(true);
    }

    // remove items handler
    const removeItemHandler = (key) => {
        const newCart = cart.filter(pd => pd.key !== key);
        setCart(newCart);
        removeFromDatabaseCart(key);
    }

    let thankYou;
    if(orderPlaced) {
        thankYou = <img src={thanksImage} alt=''/>
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
                    { thankYou }
                </div>
                <div className="cart-container">
                    <Cart product={cart}>
                        <button onClick={handlePlaceOrder}>Place Order</button>
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default Review;