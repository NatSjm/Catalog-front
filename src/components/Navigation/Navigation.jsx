import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategories } from 'fetches';
import cookie from 'js-cookie';

import {
	Link,
} from 'react-router-dom';



const Wrapper = styled('div')`
    display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	width: 400px;
	margin-left: 20px;
	margin-right: 0px;
	justify-content: space-around;
	background-color: transparent;
	& a{
	text-decoration: none;
	color: white;
	margin-left: 10px;
	&.auth {
	 color: #FF8A00;
	 margin-left: 30px;
	}
	}
`;

const Navigation = (props) => {
	const categories = useSelector((state) => [...state.categories]);
	const loggedIn = useSelector((state) => state.auth.loggedIn);
	const dispatch = useDispatch();

	React.useEffect(() => {
		fetchCategories()
	}, []);

	const handleLogout = (e) => {
		e.preventDefault();
		cookie.remove('token');
        dispatch({type: 'logout'});
	};


	return <Wrapper>
		{categories.length > 0
			? categories.map((item, i) => {
				return <h2 key={item.id}>
					<Link to={`/products?category=${item.id}`}>
						{item.name}
					</Link>
				</h2>;
			})
			: <React.Fragment/>}
		{!loggedIn ?
			<h2>
				<Link className="auth" to={`/login`}>
					Login
				</Link>
			</h2>
			: <h2>
				<Link className="auth" onClick={handleLogout} to={`/auth`}>
					Logout
				</Link>
			</h2>
		}
	</Wrapper>;
};

export default Navigation;

