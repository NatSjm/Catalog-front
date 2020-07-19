import React from 'react';
import styled from 'styled-components';
import Input from '@material-ui/core/Input'
import {makeStyles} from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


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


const UserFilter = ({ onFilter }, ...props) => {
	const classes = useStyles();


	const [filter, setFilter] = React.useState(() => ({
		first_name: '',
		last_name: '',
		status: '',
		gender: ''
	}));


	React.useEffect(() => {
		let filterString = '';
		for (let key in filter) {
			if (filter[key]) {
				filterString = filterString + '&' + key + '=' + filter[key];
			}
		}
		onFilter(filterString);

	}, [filter, onFilter] );

	const filtersFunc = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setFilter((currentState) => {
			return {
				...currentState,
				[name]: value,
			};
		});
	};

	return <Wrapper>
		<Input type="text"
			   name="first_name"
			   onChange={filtersFunc}
			   value={filter.first_name}
			   placeholder={'First name'}
		/>
		<Input type="text"
			   name="last_name"
			   onChange={filtersFunc}
			   value={filter.last_name}
			   placeholder={'Last name'}
		/>

		<FormControl className={classes.formControl}>
			<InputLabel id="demo-simple-select-helper-label">Status</InputLabel>
			<Select
				labelId="demo-simple-select-helper-label"
				id="demo-simple-select-helper"
				value={filter.status}
				name="status"
				onChange={filtersFunc}>
				<MenuItem value="">
					<em>None</em>
				</MenuItem>
				<MenuItem value="active">active</MenuItem>
				<MenuItem value="inactive">inactive</MenuItem>
			</Select>
		</FormControl>
		<FormControl className={classes.formControl}>
			<InputLabel id="demo-simple-select-helper-label">Gender</InputLabel>
			<Select
				labelId="demo-simple-select-helper-label"
				id="demo-simple-select-helper"
				name="gender"
				onChange={filtersFunc}
				value={filter.gender}>
				<MenuItem value="">
					<em>None</em>
				</MenuItem>
				<MenuItem value="male">Male</MenuItem>
				<MenuItem value="female">Female</MenuItem>
			</Select>
		</FormControl>
	</Wrapper>;
};
export default React.memo(UserFilter);


