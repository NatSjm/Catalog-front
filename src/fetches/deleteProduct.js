import axios from 'axios';
import onClose from 'components/Dialogs/onClose.js';
import cookie from 'js-cookie';

const token = cookie.get('token');
const deleteProduct = async(action, id, history) => {

	try {
		axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
		action((currentState) => {
			return {
				...currentState,
				load: true,
			};
		});
		const responce = await axios.post( process.env.REACT_APP_BACK_PATH +'/api/products/' + id, {
			Accept: 'application/json',
			_method: 'DELETE',
		});
		setTimeout(() => {
			action((currentState) => {
				return {
					...currentState,
					load: false,
				};
			});
		}, 0);
		onClose();
		history.push('/products');

	}
	catch (err) {
		console.log('err', err.message, err);
	}
 };

export default deleteProduct;
