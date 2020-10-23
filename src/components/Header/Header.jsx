import React from 'react';
import styled from 'styled-components';
import {Primary} from 'components/Block';
import Navigation from 'components/Navigation';
import {
    Link,
} from 'react-router-dom';

const Wrapper = styled(Primary)`
    background-color: rgba(23, 24, 32, 0.9);
	flex-direction: row;
	width: 100%;
	justify-content: space-between;
	padding: 10px 40px;
	margin-bottom: 10px;	 
	  & a{
	  text-decoration: none;
	  }
	  & h1{
	         color: #FF8A00;
	        }	
`;

class Header extends React.Component {

    render = () => {
        return <Wrapper>
            <Link to="/products">
                <h1>
                    Catalog
                </h1>
            </Link>
            <Navigation/>
        </Wrapper>;
    };
};

export default Header;
