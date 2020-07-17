import React from 'react';
import Typography from '@material-ui/core/Typography';
import MaterialLink from '@material-ui/core/Link';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {user} from 'components/Store/actions';
import {
	useParams,
} from 'react-router-dom';


const User = (props) => {
	let {id} = useParams();
	const {user} = props;
    const {_links} = user;
    const a =  {..._links};
    const href = {...a.avatar};



	React.useEffect(() => {
		props.userfunc(id);
	}, [id], props.userfunc);

	return <React.Fragment>
			<Typography component="h2"  variant="h4">Пользователь: {user.last_name} {user.first_name}</Typography>
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





