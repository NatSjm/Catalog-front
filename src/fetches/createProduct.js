import axios from 'axios';
import Cookies from 'js-cookie';


const create = async (push, data) => {
	const token = Cookies.get('token');
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
		if ( err.response.status === 403) {
			console.log('unauthorized');
		}
	}
};

export default create;
