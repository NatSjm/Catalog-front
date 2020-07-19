import React from 'react';
import {
	Switch,
	Route,
} from 'react-router-dom';
import {
	Main,
	Users,
	Posts,
	User,
	UserCreate,
	UserEdit
} from 'routes';
import Header from 'components/Header';

const App = () => {

	return <React.Fragment>
		<Header/>
			<Switch>
				<Route
					exact
					path="/">
					 <Main />
				</Route>
				<Route exact path={`/users`}>
					<Users />
				</Route>
				<Route  path={`/users/create`}>
					<UserCreate />
				</Route>
				<Route  path={`/users/:id/edit`}>
					<UserEdit />
				</Route>
				<Route exact path={`/users/:id`}>
					<User />
				</Route>
				<Route path={`/posts`}>
					<Posts />
				</Route>
			</Switch>
	</React.Fragment>;

};

export default React.memo(App);
