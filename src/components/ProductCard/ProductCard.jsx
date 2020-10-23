import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import {
	Link,
} from 'react-router-dom';

const useStyles = makeStyles({
	root: {
		padding: '20px',
		minWidth: 270,
		display: 'flex',
        flexDirection: 'column',
	},

	title: {
		fontSize: 14,
	},
	pos: {
		marginBottom: 12,
	},
	actions: {
		marginTop: 'auto',
	}
});

const ProductCard = ({userItem}, ...props) => {
	const classes = useStyles();


	return (
		<Card className={classes.root}>
			<CardContent>
				<Typography className={classes.title} color="textSecondary" gutterBottom>
					{userItem.type.toLowerCase()}
				</Typography>
				<Typography color="textPrimary" variant = "h5" gutterBottom>
					{userItem.name}
				</Typography>
				<Typography variant="h6" component="p">
					fragrance: {userItem.fragrance}
				</Typography>
				{Object.entries(userItem.properties).map(([key, value], i) => {
						return (value)
							? typeof (value) === 'boolean'
								? <p key={i}>{key}</p>
								: <p key={i}><span>{key}: </span> <span>{value}</span></p>
					:	<React.Fragment key={i}/>;
					}
				)}

				<Typography variant="h6" component="p">
					price: {userItem.price}$
				</Typography>
			</CardContent>
			<CardActions className={classes.actions}>
				<UserLink to={`/products/${userItem.id}`}>подробнее</UserLink>
			</CardActions>
		</Card>
	);
};

const UserLink = styled(Link)`
				text-decoration: none;
				color: black;
				padding: 10px;
				background: lightgrey;
				border-radius: 4px;
				`;
export default React.memo(ProductCard);
