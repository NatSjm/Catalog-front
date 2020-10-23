import React from 'react';
import DeleteProduct from './DeleteProduct';


let Dialogs = ({ children}) => {
	return <React.Fragment>
		<DeleteProduct/>
		{children}
	</React.Fragment>;
};

Dialogs = React.memo(Dialogs);
export default Dialogs;

