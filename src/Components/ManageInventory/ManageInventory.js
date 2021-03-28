import React from 'react';
import { useContext } from 'react';
import { UserContext, ProductsContext } from '../../App'

// impor styleSheet
import './ManageInventory.css';

const ManageInventory = () => {
	// temp consume data from app 
	const [products, setProducts] = useContext(ProductsContext)

	// consume usercontext data
	const [loggedInUser, setLoggedInUser] = useContext(UserContext);

	// handle on blur
	const handleOnBlur = () => {
		console.log('on blur worked')
	}

	// handle add product 
	const addProduct = () => {
		console.log(products)
	}
	return (
		<div className="ManageInventory">
			<h4>Please input product info</h4>
			<input onBlur={handleOnBlur} placeholder='Name of the product' type="text" name="" id="" value={loggedInUser.name} />
			<input onBlur={handleOnBlur} placeholder='Price of the product' type="text" name="" id="" value={loggedInUser.email} />
			<button value="" onClick={addProduct}>
				Add Post
			</button>
		</div>
	);
}

export default ManageInventory;
