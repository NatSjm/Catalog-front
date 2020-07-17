const defaultState = {
	address: "",
	dob: "",
	email: "",
	first_name: "",
	gender: "",
	id: "",
	last_name: "",
	phone: "",
	status: "",
	website: ""
};

const user = (state = defaultState, action) => {
	switch (action.type) {
		case 'SET_USER':
			return {
				...state,
				...action.payload
			};

		default:
			return state;
	}
};


export default user;

