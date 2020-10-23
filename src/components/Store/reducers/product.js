const product = (state = {}, action) => {
	return action.type === 'product'
		? action.payload()
		: state;
};


export default product;

