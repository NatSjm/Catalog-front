const onValue = (name, value, setState) => setState((currentState) => {
	return {
		...currentState,
		[name]: value,
	};
});
export default onValue;
