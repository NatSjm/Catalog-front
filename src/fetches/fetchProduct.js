import axios from 'axios';
import store from 'components/Store';


export const get = async (id) => {

		try {
			const {data: {product}, status} = await axios(process.env.REACT_APP_BACK_PATH +'/api/products/' + id, {
					method: 'get',
					Accept: 'application/json'
			});

				store.dispatch({
					type: 'product',
					payload: () => {
						return product;
					},
				});

		} catch (err) {
			console.log(err);
		}
};

export default get;
