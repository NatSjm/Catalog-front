import axios from 'axios';
import store from 'components/Store';
import cookie from 'js-cookie';


const fetchLogin = async (e, push) => {
	e.preventDefault();

	try {
		const elements = e.currentTarget.elements;
		const email = elements.email.value;
		const password = elements.password.value;

		const data = {
			email,
			password,
		};


		const response = await axios(process.env.REACT_APP_BACK_PATH  +'/api/auth/login', {
			method: 'post',
			Accept: 'application/json',
			data
		});

		cookie.set('token', response.data.access_token);

		store.dispatch({
			type: 'auth',
		 	payload: () => {
		 		return response.data.user;
		 	},
		 });
		push('/products');
	}
	catch (err) {
		console.log(err);
	}
};

export default fetchLogin;
