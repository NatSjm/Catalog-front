import React from 'react';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import { deleteProduct } from 'fetches';
import onClose from '../onClose.js';


let DeleteProduct = ({history}) => {
	const { name, body } = useSelector((state) => state.dialogs);
	const [ state, setState ] = React.useState(() => ({
		load: false,
	}));
	const newBody = {...body};
	const { id } = newBody ;

	const onSubmit = React.useCallback((id) => {
		deleteProduct(setState, id, history);
	}, [
		setState,
		history
	]);

	return <React.Fragment>
		<Dialog
			aria-labelledby="dialog-title"
			aria-describedby="dialog-description"
			fullWidth
			open={name === 'DeleteUser'}
			onClose={onClose}>

			{state.load
				? <DialogContent align="center">
					<Box my={2}>
						<CircularProgress color="secondary" />
					</Box>
				</DialogContent>
				: <React.Fragment>
					<DialogContent>
						<Typography>
							Delete product?
						</Typography>
					</DialogContent>
					<DialogActions>
							<Button
								color="secondary"
							    onClick={(e) => onSubmit(id)}>
								yes
							</Button>
						<Button onClick={onClose}>
							no
						</Button>
					</DialogActions>
				</React.Fragment>}
		</Dialog>
	</React.Fragment>;
};

DeleteProduct = React.memo(withRouter(DeleteProduct));

export default DeleteProduct;
