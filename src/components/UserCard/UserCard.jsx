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
		minWidth: 275,
	},
	bullet: {
		display: 'inline-block',
		margin: '0 2px',
		transform: 'scale(0.8)',
	},
	title: {
		fontSize: 14,
	},
	pos: {
		marginBottom: 12,
	},
});

const UserCard = ({userItem},...props) => {
	const classes = useStyles();


	return (
		<Card className={classes.root}>
			<CardContent>
				<Typography className={classes.title} color="textSecondary" gutterBottom>
					{userItem.status} {userItem.gender}
				</Typography>
				<Typography variant="h5" component="h2">
					{userItem.id} {userItem.first_name} {userItem.last_name}
				</Typography>
			</CardContent>
			<CardActions>
				<UserLink
					to={`/users/${userItem.id}`}>подробнее</UserLink>
			</CardActions>
		</Card>
	);
};

const UserLink = styled(Link)`
text-decoration: none;
color: black;
`;
export default React.memo(UserCard);
