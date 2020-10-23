import axios from 'axios';
import store from 'components/Store';


export const get = async (nextCursor, filterString, callback) => {

	if (nextCursor === null) return;
	const next = nextCursor ? 'next_cursor=' + nextCursor : '';

	try {
		const {data: {data, meta: {next_cursor}}} = await axios(process.env.REACT_APP_BACK_PATH + '/api/products?' + next + filterString, {

			method: 'get',
			Accept: 'application/json'
		});

		callback(next_cursor, () => {
			if (nextCursor) {
				store.dispatch({
					type: 'products',
					payload: () => {
						return data
					},
				});
			} else {
				store.dispatch({
					type: 'firstTimeProducts',
					payload: () => {
						return data
					},
				});
			}
		});


	} catch (err) {
		console.log(err);
	}
};

export default get;
