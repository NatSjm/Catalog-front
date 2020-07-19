import React from 'react';
import {
	useParams
} from "react-router-dom";

const UserEdit = () => {
	let {id} = useParams();

	return 	<React.Fragment>
			<h2>Update a  user {id} </h2>
	       </React.Fragment>

};

export default React.memo(UserEdit);

