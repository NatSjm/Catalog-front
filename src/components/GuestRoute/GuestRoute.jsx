import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';



const GuestRoute = ({ children, ...rest }) =>{
	const loggedIn = useSelector((state) => {
		return state.auth.loggedIn;
	});


	return (
		<Route
			{...rest}
			render={({ location }) =>
				!loggedIn ? (
					children
				) : (
					<Redirect
						to={{
							pathname: "/products",
							state: { from: location }
						}}
					/>
				)
			}
		/>
	);
};

export default GuestRoute;
