import axios from 'axios';
import store from 'components/Store';


const fetchMe = async (token, callback) => {
	try {
		axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

		const response = await axios(process.env.REACT_APP_BACK_PATH  +'/api/auth/me', {
			method: 'post',
			Accept: 'application/json',
		});


		store.dispatch({
			type: 'auth',
			payload: () => {
				return response.data.user;
			},
		});
		setTimeout(callback, 0);
	}
	catch (err) {
		console.log(err);
	}
};

export default fetchMe;
