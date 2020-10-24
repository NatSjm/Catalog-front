import axios from 'axios';
import cookie from 'js-cookie';
const token = cookie.get('token');
const create = async (push, data) => {
	try {
		axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
		const response = await axios(process.env.REACT_APP_BACK_PATH +'/api/products', {
			method: 'post',
			data,
			Accept: 'application/json'
		});
        push('/products');
	}
	catch (err) {
		console.log(err.response.data.errors);
	}
};

export default create;
