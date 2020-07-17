import axios from 'axios';
import accessTocken from 'const/accessTocken.js'


 const user = function (id) {
	return async (dispatch) => {
		try {
			const {data: { result }}  = await axios.get(`https://gorest.co.in/public-api/users/${id}`, {
				headers: {
					'Authorization': 'Bearer ' + accessTocken
				}
			});

				dispatch({
					type: 'SET_USER',
					payload: result,
				});

		}
		catch (err) {
			console.log('err', err.message, err);
		}
	}
};
 export default user;
