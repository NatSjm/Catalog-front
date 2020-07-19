import React from 'react';
import Typography from '@material-ui/core/Typography';
import MaterialLink from '@material-ui/core/Link';
import {
	Link,
	useParams
} from "react-router-dom";
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { user } from 'components/Store/actions';
import styled from "styled-components";
import onDialog from 'utils/onDialog.js';



const User = ({userfunc, user}, ...props) => {
	let {id} = useParams();
	const {_links} = user;
	const a = {..._links};
	const href = {...a.avatar};

	// const deleteHandler = (e) => {
	// 	e.preventDefault;
	// 	onDialog('DeleteUser', user.id)
	// };


	React.useEffect(() => {
		userfunc(id);
	}, [id, userfunc]);

	return <React.Fragment>
		<Typography component="h2" variant="h4">Пользователь: {user.last_name} {user.first_name}</Typography>
		<div>
			<CustomButton>
				<EditLink to={`/users/${id}/edit`}>
					Редактировать
				</EditLink>
			</CustomButton>
			<CustomButton
				onClick={onDialog('DeleteUser', {id: user.id})}>
				Удалить
			</CustomButton>
		</div>
		<Typography component="h3" variant="h5">ID: {user.id}</Typography>
		<Typography component="p" variant="h6">Статус: {user.status}</Typography>
		<Typography component="p" variant="h6">Пол: {user.gender}</Typography>
		<Typography component="p" variant="h6">Адрес: {user.address}</Typography>
		<Typography component="p" variant="h6">День рождения: {user.dob}</Typography>
		<Typography component="p" variant="h6">E-mail: {user.email}</Typography>
		<Typography component="p" variant="h6">Телефон: {user.phone}</Typography>
		<MaterialLink href={user.website}
					  target="_blank"
					  display="block"
					  variant="h6"
		>Сайт</MaterialLink>
		<img width="400px" alt={user.id} src={href.href}/>

	</React.Fragment>
};

export default connect((store) => ({
	user: store.user,
}), (dispatch) => ({
	userfunc: bindActionCreators(user, dispatch),
}))(User);

const EditLink = styled(Link)`
   text-decoration: none;
   color: #1D1497;
`;

const CustomButton = styled(Button)`
background-color: #7a7a7a;
margin: 20px;
margin-left: 0;
color: #cc0479;
  &:hover {
  border: 1px solid #7a7a7a;
  margin: 19px;
  margin-left: 0;
}
 & a{
  color: #61DAFB;;
  }
`;






