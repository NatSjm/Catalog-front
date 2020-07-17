import React from 'react';
import Loader from 'components/Loader';
import Pagination from '@material-ui/lab/Pagination';
import styled from 'styled-components';


class Paginate extends React.PureComponent {
	static defaultProps = {
		func: () => {
		},
		index: 1,
		limit: 10,
		filterString: ''
	};

	state = {
		index: this.props.index,
		total: 0,
		limit: this.props.limit,
		filterString: this.props.filterString
	};

	componentDidMount = () => {
		this.props.func(this.state.index, this.state.filterString, (total, callback) => {
			this.setState((currentState) => ({
				...currentState,
				total,
			}), callback)
		});
	};

	componentDidUpdate(prevProps, prevState, snapshot) {
		if (prevProps.filterString !== this.props.filterString) {
			this.props.func(1, this.props.filterString, (total, callback) => {
				this.setState((currentState) => ({
					...currentState,
					total,
				}), callback)
			});
		}
	}

	onPage = (event, value) => {
		const {index: currentIndex} = this.state;

		if (value !== currentIndex) {
			this.props.func(value, this.props.filterString, (total, callback) => {
				this.setState((currentState) => ({
					...currentState,
					total,
					index: value,
				}), callback)
			});
		}
	};

	render = () => {
		const {children = []} = this.props;
		const {total, limit, index} = this.state;
		const pages = Math.ceil(total / limit);

		return <React.Fragment>
			<UserCount>Общее количество пользователей: {(total > 0) && total}</UserCount>
			<Wrapper>
			{children.length > 0
				? children
				: <Loader/>}
			</Wrapper>
			<Pagination count={pages} page={index} onChange={this.onPage}/>
		</React.Fragment>
	};
};

const UserCount = styled('h4')`

`;
const Wrapper = styled('div')`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    & > * {
    width: 30%;
    margin: 10px;
    }
`;


export default Paginate;
