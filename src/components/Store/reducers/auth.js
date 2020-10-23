const initialState = {
	user: {},
	loggedIn: false
};

const auth = (state = initialState, action) => {
	return action.type === 'auth'
		? {
			...state,
			user: action.payload(),
			loggedIn: true
		} : action.type === 'logout'
	     ? {
				...state,
				user: {},
				loggedIn: false
			}
		: state;
};

export default auth;
