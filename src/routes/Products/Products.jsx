import React from 'react';
import { ContentWrapper } from 'components/Block';
import { useSelector } from 'react-redux';
import Paginate from 'components/Paginate';
import ProductCard from 'components/ProductCard';

import {
	Link,
	useLocation,
} from "react-router-dom";
import styled from 'styled-components';
import {fetchProducts} from 'fetches';

function useQuery() {
	return new URLSearchParams(useLocation().search);
}

const Products = () => {

	let query = useQuery();
	let category = query.get('category') || '';
	const data = useSelector((state) => [...state.products]) ;
	const [ filterString, setFilterString ] = React.useState('');

	React.useEffect(() => {
		setFilterString(`&category=${category}`);
	}, [category] );

		return <ContentWrapper>
			<CreateLink to={'/products/create'}>Create new product</CreateLink>
			<Paginate
				func={fetchProducts}
			    filterString={filterString}>
				{data.map((item, i) => {
					return <ProductCard
						key={ i }
						userItem={ item }/>
				})}
			</Paginate>
		</ContentWrapper>;
	};

export default Products;

const CreateLink = styled(Link)`
   font-weight: bold;
   text-transform: uppercase;
   color: black;
   font-size: 20px;
   display: inline-block;
   margin: 20px;
`;



