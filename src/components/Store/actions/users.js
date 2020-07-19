import axios from 'axios';
import accessTocken from 'const/accessTocken.js';


export const get = function (page, filterString, callback) {
	return async (dispatch) => {
		try {
			const {data: {result, _meta: { totalCount}} } = await axios.get(`https://gorest.co.in/public-api/users?page=${page}${filterString}`, {
				headers: {
					'Authorization': 'Bearer ' + accessTocken
				}
			});

			if (result.status === 500) {
				return;
			}
			callback(totalCount, () => {
				dispatch({
					type: 'SET_USERS',
					payload: result,
				});
			});

		}
		catch (err) {
			console.log('err', err.message, err);
		}
	}
};
