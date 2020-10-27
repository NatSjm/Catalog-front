import Store from 'components/Store';
import Cookies from "js-cookie";

const logout = () => {
	Cookies.remove('token');
	Store.dispatch({type: 'logout'});
};

export default logout;
