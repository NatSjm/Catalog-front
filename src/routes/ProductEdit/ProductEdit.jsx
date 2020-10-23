import React from 'react';
import {
	useParams,
	withRouter
} from "react-router-dom";
import { useSelector } from 'react-redux';
import { fetchProduct as productfunc, fetchFragrances, updateProduct } from 'fetches';
import Grid from "@material-ui/core/Grid";
import { ContentWrapper } from 'components/Block';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel/InputLabel";
import Select from "@material-ui/core/Select/Select";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel/FormControlLabel";
import Switch from "@material-ui/core/Switch/Switch";
import Button from "components/Button";
import Box from "@material-ui/core/Box";


const ProductEdit = ({history}) => {
	const push = history.push;
	let {id} = useParams();



	React.useEffect(() => {
		productfunc(id);
		fetchFragrances();
	}, [id, productfunc, fetchFragrances]);

	const product = useSelector((state) => {
		return {...state.product};
	});
	const properties = {...product.properties};
	const fragrances = useSelector((state) => [...state.fragrances]);

	const onSubmit = React.useCallback((e) => {
		e.preventDefault();
		 return updateProduct(push, e.target.elements, id, product.type);

	},[push, product.type]);


	return 	<ContentWrapper>
			<h2>Update the product </h2>

		{(Object.keys(product).length !== 0) && <Box
			mt={8}
			my={4}>
			<form onSubmit={onSubmit}>
				<Grid
					container
					spacing={1}
					mb={10}
					alignItems="flex-end">
					{/*<input type="hidden" name="index" value={product.id}/>*/}
					<Grid
						item
						mb={8}
						xs={12}>
						<TextField
							fullWidth
							disabled
							name="type"
							value={product.type}
							inputProps={{
								style: {
									fontSize: 24,
									padding: '0 0 4px',
								}
							}}/>
					</Grid>
					<Grid
						item
						mb={8}
						xs={12}>
						<TextField
							fullWidth
							name="name"
							defaultValue={product.name}
							/>
					</Grid>
					<Grid
						item
						mb={8}
						xs={12}>
						<TextField
							fullWidth
							name="description"
							label="Description"
							defaultValue={product.description}
							inputProps={{
								style: {
									fontSize: 24,
									padding: '0 0 4px',
								}
							}}/>
					</Grid>
						<Grid
							item
							mb={8}
							xs={12}>
							<TextField
								fullWidth
								name="price"
								label="Price"
								defaultValue={product.price}
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
						mb={8}
						xs={12}>
						<FormControl fullWidth>
							<InputLabel id="fragrance-label">
								Fragrance
							</InputLabel>
							<Select
								labelId="fragrance-select-label"
								id="fragrance-select"
								name="fragrance_id"
								defaultValue={product.fragranceId}>
								{fragrances.map((fragrance) => {
									return <MenuItem key={fragrance.id} value={fragrance.id}>
										{fragrance.name}
									</MenuItem>
								})}
							</Select>
						</FormControl>
						{(['shampoo', 'liquid soap', 'toothpaste'].indexOf(product.type) > -1) && (
							<Grid
								item
								mb={8}
								xs={12}>
								<TextField
									fullWidth
									name="value"
									label="Value, ml"
									defaultValue={product.properties['value, ml']}
									inputProps={{
										style: {
											fontSize: 24,
											padding: '0 0 4px',
										}
									}}/>
							</Grid>
						)}
						{(['solid shampoo', 'soap'].indexOf(product.type) > -1) && (
							<Grid
								item
								mb={8}
								xs={12}>
								<TextField
									fullWidth
									name="weight"
									label="Weight, g"
									defaultValue={product.properties['weight, g']}
									inputProps={{
										style: {
											fontSize: 24,
											padding: '0 0 4px',
										}
									}}/>
							</Grid>
						)}
						{product.type === 'toothpaste' && (
							<FormControlLabel
								control={<Switch defaultChecked={product.properties['with whitening effect']}
												 name="whitening_effect"/>}
								label="Whitening effect"
							/>
						)}
						{(['soap', 'liquid soap'].indexOf(product.type) > -1) && (
							<FormControlLabel
								control={<Switch defaultChecked={product.properties.antibacterial}
												 name="is_antibacterial"/>}
								label="Antibacterial"
							/>
						)}
						{(product.type === 'liquid soap') && (
							<FormControlLabel
								control={<Switch defaultChecked={product.properties['contains surfactants']}
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
		}
	       </ContentWrapper>

};

export default React.memo(withRouter(ProductEdit));

