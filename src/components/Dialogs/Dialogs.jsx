import React from 'react';
import DeleteUser from './DeleteUser';


let Dialogs = ({ children}) => {
	return <React.Fragment>
		<DeleteUser/>
		{children}
	</React.Fragment>;
};

Dialogs = React.memo(Dialogs);
export default Dialogs;

