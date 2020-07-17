import React from 'react';
import Navigation from 'components/Navigation'
const Main = () => {
	return 	<React.Fragment>
			<h2>Главная страница</h2>
		    <Navigation/>
	       </React.Fragment>

};

export default React.memo(Main);

