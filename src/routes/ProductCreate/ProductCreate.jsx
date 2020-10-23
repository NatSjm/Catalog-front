import React from 'react';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from "components/Button";
import { fetchFragrances, createProduct } from 'fetches';
import numberValidate from './numberValidate';
import onValue from './onValue';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { ContentWrapper } from 'components/Block';

const buttonStyle = {
	padding: 0,
	textTransform: 'lowercase',
};

const ProductCreate = ({history}) => {
	const push = history.push;
	React.useEffect(() => {
		fetchFragrances()
	}, []);



	const fragrances = useSelector((state) => [...state.fragrances]);


	const [state, setState] = React.useState(() => ({
		name: '',
		description: '',
		price: '',
		fragrance_id: '',
		type: '',
		value: '',
		weight: '',
		whitening_effect: false,
		is_antibacterial: false,
		contains_surfactants: false
	}));

	const onSubmit = React.useCallback((e) => {
		e.preventDefault();
		const data = {
			name: state.name,
			description: state.description,
			price: Math.round((state.price) * 100),
			fragrance_id: Number(state.fragrance_id),
			type: state.type,
			...((['Shampoo', 'LiquidSoap', 'Toothpaste'].indexOf(state.type) > -1) && {value: state.value}),
			...((['SolidShampoo', 'Soap'].indexOf(state.type) > -1) && {weight: state.weight}),
			...(state.type === 'Toothpaste' && {whitening_effect: state.whitening_effect}),
			...((['Soap', 'LiquidSoap'].indexOf(state.type) > -1) && {is_antibacterial: state.is_antibacterial}),
			...(state.type === 'LiquidSoap' && {contains_surfactants: state.contains_surfactants})
		};

		return createProduct(push, data);
	},[state, push]);

	const onNumberValueChange = (e) => {
		if (numberValidate(e.target.value)) {
			onValueChange(e);
		}
	};
	const onValueChange = React.useCallback((e) => onValue(e.target.name, e.target.value, setState), [
		setState,
	]);

	const onBooleanChange = React.useCallback((e) => onValue(e.target.name, e.target.checked, setState), [
		setState,
	]);


	return <ContentWrapper>
		<h3>Create a product</h3>
		<Box
			mt={6}
			my={4}>
			<form onSubmit={onSubmit}>
				<Grid
					container
					spacing={1}
					alignItems="flex-end">
					<Grid
						container
						item
						mb={6}
						xs={12}>
						<FormControl fullWidth>
							<InputLabel id="type-select-label">
								Product type
							</InputLabel>
							<Select
								labelId="type-select-label"
								id="type-select"
								name="type"
								value={state.type || ""}
								onChange={onValueChange}>
								<MenuItem value="Shampoo">
									Shampoo
								</MenuItem>
								<MenuItem value="SolidShampoo">
									Solid Shampoo
								</MenuItem>
								<MenuItem value="Toothpaste">
									Toothpaste
								</MenuItem>
								<MenuItem value="Soap">
									Soap
								</MenuItem>
								<MenuItem value="LiquidSoap">
									Liquid soap
								</MenuItem>
							</Select>
						</FormControl>
					</Grid>
					<Grid
						item
						mb={6}
						xs={12}>
						<TextField
							fullWidth
							name="name"
							label="Name"
							value={state.name}
							onChange={onValueChange}
							inputProps={{
								style: {
									fontSize: 24,
									padding: '0 0 4px',
								}
							}}/>
					</Grid>
					<Grid
						item
						mb={6}
						xs={12}>
						<TextField
							fullWidth
							name="description"
							label="Description"
							value={state.description}
							onChange={onValueChange}
							inputProps={{
								style: {
									fontSize: 24,
									padding: '0 0 4px',
								}
							}}/>
					</Grid>
					<Grid
						item
						mb={6}
						xs={12}>
						<TextField
							fullWidth
							name="price"
							label="Price"
							value={state.price}
							onChange={onNumberValueChange}
							inputProps={{
								style: {
									fontSize: 24,
									padding: '0 0 4px',
								}
							}}/>
					</Grid>
				</Grid>
				<Grid
					container
					item
					mb={6}
					xs={12}>
					<FormControl fullWidth>
						<InputLabel id="fragrance-label">
							Fragrance
						</InputLabel>
						<Select
							labelId="fragrance-select-label"
							id="fragrance-select"
							name="fragrance_id"
							value={state.fragrance_id || ""}
							onChange={onValueChange}>
							{fragrances.map((fragrance) => {
								return <MenuItem key={fragrance.id} value={fragrance.id}>
									{fragrance.name}
								</MenuItem>
							})}
						</Select>
					</FormControl>
					{(['Shampoo', 'LiquidSoap', 'Toothpaste'].indexOf(state.type) > -1) && (
						<Grid
							item
							mb={6}
							xs={12}>
							<TextField
								fullWidth
								name="value"
								label="Value, ml"
								value={state.value}
								onChange={onNumberValueChange}
								inputProps={{
									style: {
										fontSize: 24,
										padding: '0 0 4px',
									}
								}}/>
						</Grid>
					)}
					{(['SolidShampoo', 'Soap'].indexOf(state.type) > -1) && (
						<Grid
							item
							mb={6}
							xs={12}>
							<TextField
								fullWidth
								name="weight"
								label="Weight, g"
								value={state.weight}
								onChange={onNumberValueChange}
								inputProps={{
									style: {
										fontSize: 24,
										padding: '0 0 4px',
									}
								}}/>
						</Grid>
					)}
					{state.type === 'Toothpaste' && (
						<FormControlLabel
							control={<Switch checked={state.whitening_effect} onChange={onBooleanChange}
											 name="whitening_effect"/>}
							label="Whitening effect"
						/>
					)}
					{(['Soap', 'LiquidSoap'].indexOf(state.type) > -1) && (
						<FormControlLabel
							control={<Switch checked={state.is_antibacterial} onChange={onBooleanChange}
											 name="is_antibacterial"/>}
							label="Antibacterial"
						/>
					)}
					{(state.type === 'LiquidSoap') && (
						<FormControlLabel
							control={<Switch checked={state.contains_surfactants} onChange={onBooleanChange}
											 name="contains_surfactants"/>}
							label="Contains surfactants"
						/>
					)}
				</Grid>
				<Button
					color="primary"
					type="submit"
				     variant="contained">
					Сохранить
				</Button>
			</form>
		</Box>
	</ContentWrapper>;
};

export default React.memo(withRouter(ProductCreate));
