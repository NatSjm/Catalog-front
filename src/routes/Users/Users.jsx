import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {users} from 'components/Store/actions';
import Paginate from 'components/Paginate';
import UserCard from 'components/UserCard';
import UserFilter from "../../components/UserFilter/UserFilter";
import {
	Link,
} from "react-router-dom";
import styled from 'styled-components';

class Users extends React.Component {
	static defaultProps = {
		data: [],
	};
	state = {
		filterString: '',
	};


	onFilter = (string) => {
		this.setState({filterString: string});
	};

	render = () => {
		const {data} = this.props;
		return <React.Fragment>
			<CreateLink to={'/users/create'}>Create new user</CreateLink>
			<UserFilter
				onFilter={this.onFilter}/>
			<Paginate
				func={this.props.users.get}
			     filterString={this.state.filterString}>
				{data.map((item, i) => {
					return <UserCard
						key={ i }
						userItem={ item }/>
				})}
			</Paginate>
		</React.Fragment>;
	};
};

export default connect((store) => ({
	data: store.users,
}), (dispatch) => ({
	users: bindActionCreators(users, dispatch),
}))(Users);

const CreateLink = styled(Link)`
   text-decoration: none;
   color: #1D1497;
   font-size: 20px;
`;



