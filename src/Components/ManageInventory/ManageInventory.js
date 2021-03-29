import React from 'react';
import { useContext, useState } from 'react';
import { UserContext, ProductsContext } from '../../App'

// impor styleSheet
import './ManageInventory.css';

const ManageInventory = () => {
	// temp consume data from app 
	const [products, setProducts] = useContext(ProductsContext)

	// consume usercontext data
	const [loggedInUser, setLoggedInUser] = useContext(UserContext);

	// single product handling
	const [singleProduct, setSingleProduct] = useState({});

	// handle on blur
	const handleOnBlur = (e) => {
		console.log('on blur worked');
		const newProduct = {...singleProduct};

		if( e.target.name === 'productPrice') {
			newProduct[e.target.name] = parseInt(e.target.value);
		} else {
			newProduct[e.target.name] = e.target.value;
		}
		setSingleProduct(newProduct);
	}

	const clearTheInput = (e) => {
		e.target.value = '';
	}


	// handle add product 
	const addProduct = () => {
		fetch('http://localhost:5000/addProduct',{
			method: 'POST',
			headers: {
				'Content-type' : 'applicaton/json'
			},
			body: JSON.stringify(singleProduct) 
		})
		.then(res => res.json())
		.then(result => {
			console.log(result);
		})

		console.log(singleProduct)

	}
	return (
		<div className="ManageInventory">
			<h4>Please input product info</h4>
			<input onFocus={clearTheInput} onBlur={handleOnBlur} placeholder='Name of the product' type="text" name="productName" id="" />
			<input onFocus={clearTheInput} onBlur={handleOnBlur} placeholder='Price of the product' type="text" name="productPrice" id="" />
			<button value="" onClick={addProduct}>
				Add Post
			</button>
		</div>
	);
}

export default ManageInventory;
