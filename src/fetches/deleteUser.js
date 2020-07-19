import axios from 'axios';
import onClose from 'components/Dialogs/onClose.js';
import accessTocken from 'const/accessTocken.js';


const deleteUser = async(action, id, history) => {


	try {
		action((currentState) => {
			return {
				...currentState,
				load: true,
			};
		});
		await axios(`https://gorest.co.in/public-api/users/${id}`, {
			headers: {
				'Authorization': 'Bearer ' + accessTocken
			},
			method: 'delete',
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
		history.push('/users');

	}
	catch (err) {
		console.log('err', err.message, err);
	}
 };

export default deleteUser;
