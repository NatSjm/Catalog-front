import React from 'react';
import ReactDOM from 'react-dom';
import {Provider as StoreProvider} from 'components/Store';
import App from 'components/App';
import Dialogs from 'components/Dialogs';
import {
	BrowserRouter,
} from 'react-router-dom';

ReactDOM.render(
	<StoreProvider>
	<BrowserRouter>
		<Dialogs>
			<App/>
		</Dialogs>
	</BrowserRouter>
	</StoreProvider>,
	document.getElementById('root')
);
