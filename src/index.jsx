import React from 'react';
import ReactDOM from 'react-dom';
import {Provider as StoreProvider} from 'components/Store';
import App from 'components/App';


ReactDOM.render(
	<StoreProvider>
			<App/>
	</StoreProvider>,
	document.getElementById('root')
);
