import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as StoreProvider } from 'components/Store';
import App from 'components/App';
import Dialogs from 'components/Dialogs';
import {
	BrowserRouter,
} from 'react-router-dom';
import { fetchMe } from './fetches';
import cookie from 'js-cookie';
import jwt from 'jsonwebtoken';
import GlobalStyle from 'components/GlobalStyle';

const jwt_secret = 'qmuZvzXk9pee0nP1Gfe7BSA8GstsDShJosGYusu7ADtBO92l59cz6flXkosuuvNL';
let token = cookie.get('token');
if (token) {
	jwt.verify(token, jwt_secret, (err, decoded) => {
		if (err) {
			token = null;
			cookie.remove('token');
		}
	});
}
const renderApp = () => {
	ReactDOM.render(
		<StoreProvider>
			<BrowserRouter>
				<Dialogs>
					<GlobalStyle/>
					<App/>
				</Dialogs>
			</BrowserRouter>
		</StoreProvider>,
		document.getElementById('root')
	);
};

if (token) {
	fetchMe(token, renderApp);
} else {
	renderApp();
}


