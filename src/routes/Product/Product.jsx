import React from 'react';
import Typography from '@material-ui/core/Typography';
import {
	Link,
	useParams
} from "react-router-dom";
import Button from '@material-ui/core/Button';
import { useSelector } from 'react-redux';
import { fetchProduct as productfunc } from 'fetches';
import { ContentWrapper } from 'components/Block';
import styled from "styled-components";
import onDialog from 'utils/onDialog.js';


const Product = (props) => {
	let {id} = useParams();
	const product = useSelector((state) => {
		return {...state.product};
	});
	const properties = {...product.properties};

	React.useEffect(() => {
		productfunc(id);
	}, [id, productfunc]);


	return (Object.keys(product).length !== 0)
		? <ContentWrapper>
			<Typography component="h2" variant="h4"> {product.type} {product.name}</Typography>
			<div>
				<CustomButton>
					<EditLink to={`/products/${id}/edit`}>
						Edit
					</EditLink>
				</CustomButton>
				<CustomButton
					onClick={onDialog('DeleteUser', {id: id})}>
					Delete
				</CustomButton>
			</div>
			<Typography component="h3" variant="h5">fragrance: {product.fragrance}</Typography>
			<Typography variant="h6">price: {product.price} $</Typography>

			{Object.entries(properties).map(([key, value], i) => {
					return (value)
						? typeof (value) === 'boolean'
							? <Typography component="p" variant="h6" key={i}>{key}</Typography>
							: <Typography component="p" variant="h6" key={i}><span>{key}: </span>
								<span>{value}</span></Typography>
						: <React.Fragment key={i}/>;
				}
			)}
			<Typography mt={10} component="p" variant="body2">{product.description}</Typography>
		</ContentWrapper>
		: <Typography component="p" variant="h5">No such item</Typography>;
};
export default Product;

const EditLink = styled(Link)`
   text-decoration: none;
   color: #1D1497;
`;

const CustomButton = styled(Button)`
background-color: #7a7a7a;
margin: 20px;
margin-left: 0;
color: white;

  &:hover {
  border: 1px solid #7a7a7a;
  margin: 19px;
  margin-left: 0;
  color: black;
  a {
    color: black;
  }
}
 & a{
  color: white;
  }
`;






