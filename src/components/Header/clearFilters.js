import Store from 'components/Store';


const clearFilters = () => {
	Store.dispatch({type: 'clearFilters'});
};

export default clearFilters;
