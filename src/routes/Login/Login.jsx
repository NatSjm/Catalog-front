import React from 'react';
import { withRouter } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { fetchLogin } from 'fetches';

let Login = ({ history }) => {
	const onSubmit = React.useCallback((e) => fetchLogin(e, history.push), [
		history.push,
	]);


	return <Container maxWidth="xs">
		<Box mt={6}>
			<Paper variant="outlined">
				<Box
					p={2}
					align="center">
					<Typography
						component="h2"
						variant="h5"
						align="center">
						Login
					</Typography>

						<form noValidate onSubmit={onSubmit}>
							<TextField
								autoFocus
								required
								fullWidth
								id="email"
								name="email"
								autoComplete="email"
								label="Email адрес"
								variant="outlined"
								margin="normal" />
							<TextField
								required
								fullWidth
								id="password"
								name="password"
								type="password"
								autoComplete="current-password"
								label="Пароль"
								variant="outlined"
								margin="normal" />

							<Box my={4} />
							<Button
								fullWidth
								type="submit"
								variant="contained"
								color="primary">
								Login
							</Button>
						</form>
				</Box>
			</Paper>
		</Box>

	</Container>;
};

Login = React.memo(withRouter(Login));

export default Login;
