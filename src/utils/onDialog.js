import Store from 'components/Store';

const onDialog = (name = '', body = {}) => () => {
	Store.dispatch({
		type: 'dialogs',
		payload: () => ({
			name,
			body,
		}),
	});
};

export default onDialog;
