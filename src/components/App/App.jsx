import React from 'react';
import {
	Switch,
	Route,
} from 'react-router-dom';
import {
	Products,
	Product,
	ProductCreate,
	ProductEdit,
	Login
} from 'routes';
import Header from 'components/Header';
import GuestRoute from 'components/GuestRoute';
import PrivateRoute from 'components/PrivateRoute';

const App = () => {

	return <React.Fragment>
		<Header/>
			<Switch>
				<Route
					exact
					path="/">
					 <Products />
				</Route>
				<Route exact path={`/products`}>
					<Products />
				</Route>
				<PrivateRoute  path={`/products/create`}>
					<ProductCreate />
				</PrivateRoute>
				<PrivateRoute  path={`/products/:id/edit`}>
					<ProductEdit />
				</PrivateRoute>
				<PrivateRoute exact path={`/products/:id`}>
					<Product />
				</PrivateRoute>
				<GuestRoute path={`/login`}>
					<Login />
				</GuestRoute>
			</Switch>
	</React.Fragment>;

};

export default React.memo(App);
