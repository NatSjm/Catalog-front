import React from 'react';
import styled from 'styled-components';


import {
    Link,
} from 'react-router-dom';

const Wrapper = styled('div')`
    display: flex;
	flex-direction: row;
	width: 400px;
	margin-left: 20px;
	margin-right: 0px;
	justify-content: space-around;
	background-color: transparent;
	& a{
	text-decoration: none;
	color: white;
	}
`;

class Navigation extends React.Component {

    render = () => {
        return <Wrapper>
            <h2>
                <Link to="/users">
                    Пользователи
                </Link>
            </h2>
            <h2>
                <Link to="/posts">
                    Посты
                </Link>
            </h2>
        </Wrapper>;
    };
};

export default Navigation;
