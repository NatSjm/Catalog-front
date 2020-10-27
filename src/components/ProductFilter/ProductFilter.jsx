import React from 'react';
import styled from 'styled-components';
import Input from '@material-ui/core/Input'
import {makeStyles} from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { fetchFragrances } from 'fetches';
import { useSelector } from "react-redux";



const useStyles = makeStyles((theme) => ({
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
}));

const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: baseline;	
	min-height: 100px;
	 `;


const ProductFilter = ({ onFilter, category }, ...props) => {
	const classes = useStyles();
	React.useEffect(() => {
		fetchFragrances()
	}, []);



	const fragrances = useSelector((state) => [...state.fragrances]);

	const initialState = {
		category: '',
		fragrance: '',
		is_antibacterial: '',
		price: ''

	};
	const [filter, setFilter] = React.useState(() => (initialState));

	React.useEffect(() => {

			setFilter((currentState) => {
				if(category === ''){
					return initialState;
				}
				return {
					...currentState,
					category: category,
				};
			});
	}, [category] );

	React.useEffect(() => {
		getProducts()
	}, [filter] );


	const getProducts = () => {
		let filterString = '';
		for (let key in filter) {
			if (filter[key] !== '') {
				filterString = filterString + '&' + key + '=' + filter[key];
			}
		}
		onFilter(filterString);
	};

	const filtersFunc = async(e) => {
		const name = e.target.name;
		const value = e.target.value;
		await setFilter((currentState) => {
			return {
				...currentState,
				[name]: value,
			};
		});
	};

	return <Wrapper>
		<FormControl className={classes.formControl} >
			<InputLabel id="fragrance-label">
				Fragrance
			</InputLabel>
			<Select
				labelId="fragrance-select-label"
				id="fragrance-select"
				name="fragrance"
				value={filter.fragrance || ""}
				onChange={filtersFunc}>
				<MenuItem  value="">
                 all
				</MenuItem>
				{fragrances.map((fragrance) => {
					return <MenuItem key={fragrance.id} value={fragrance.id}>
						{fragrance.name}
					</MenuItem>
				})}
			</Select>
		</FormControl>
		<FormControl className={classes.formControl}>
			<InputLabel id="antibacterial-select-helper-label">Antibacterial</InputLabel>
			<Select
				labelId="antibacterial-select-helper-label"
				id="demo-simple-select-helper"
				value={filter.is_antibacterial || ''}
				name="is_antibacterial"
				onChange={filtersFunc}>
				<MenuItem value="">
					no matter
				</MenuItem>
				<MenuItem value="1">yes</MenuItem>
				<MenuItem value="false">no (soap)</MenuItem>
			</Select>
		</FormControl>
		<FormControl className={classes.formControl}>
			<InputLabel id="antibacterial-select-helper-label">Price</InputLabel>
			<Select
				labelId="price-select-helper-label"
				id="price-select-helper"
				value={filter.price || ''}
				name="price"
				onChange={filtersFunc}>
				<MenuItem value="">all</MenuItem>
				<MenuItem value="<_1000">{"< 10"}</MenuItem>
				<MenuItem value="1000_10000">from 10 to 100</MenuItem>
				<MenuItem value="10100_50000">from 101 to 500</MenuItem>
				<MenuItem value=">_50000">{"> 500"}</MenuItem>
			</Select>
		</FormControl>
	</Wrapper>;
};
export default React.memo(ProductFilter);


