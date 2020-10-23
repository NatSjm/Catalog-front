import axios from 'axios';
import store from 'components/Store';



const get = async () => {
	try {
		const response = await axios(process.env.REACT_APP_BACK_PATH +'/api/fragrances', {
			method: 'get',
			Accept: 'application/json'
		});

		store.dispatch({
			type: 'fragrances',
			payload: () => {
				return response.data.data;
			}
		});
	 }
	catch (err) {
		console.log(err);
	}
};

export default get;

