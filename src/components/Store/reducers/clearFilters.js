const clearFilters = (state = false, action) => {
	return action.type === 'clearFilters'
		? !state
		: state;
};

export default clearFilters;
