import Store from 'components/Store';

const onClose = (e, reason = '', action) => {
	return reason === 'clickaway'
		? true
		: Store.dispatch({
			type: 'dialogs',
			payload: () => ({}),
		});
};

export default onClose;

