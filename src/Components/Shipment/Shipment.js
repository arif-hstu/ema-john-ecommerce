import React, { useContext } from 'react'
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';
import './Shipment.css'

function Shipment() {
	const { register, handleSubmit, watch, errors } = useForm();
	const onSubmit = data => console.log(data);

	// console.log(watch("example")); // watch input value by passing the name of it

	// useContext to get state data
	const [loggedInUser, setLoggedInUser] = useContext(UserContext);

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			< input name="name" defaultValue={loggedInUser.name} placeholder='Your Name' ref={register({ required: true })} />
			{ errors.name && <span>This field is required</span>}
			<br />
			<br />
			< input name="email" defaultValue={loggedInUser?.email} placeholder='Your Email' ref={register({ required: true })} />
			{ errors.email && <span>This field is required</span>}
			<br />
			<br />
			< input name="address" placeholder='Your Address' ref={register({ required: true })} />
			{errors.address && <span>This field is required</span>}<br />
			<br />
			<input type="submit" />
		</form >
	);
}

export default Shipment;