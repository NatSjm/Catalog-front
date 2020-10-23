import React from 'react';
import Loader from 'components/Loader';
import styled from 'styled-components';


class Paginate extends React.PureComponent {
	static defaultProps = {
		func: () => {
		},
		next_cursor: '',
		filterString: ''
	};

	state = {
		next_cursor: '',
		filterString: this.props.filterString
	};

	componentDidMount = () => {
		window.addEventListener('scroll', this.handleScroll);
		this.props.func(this.state.next_cursor, this.state.filterString, (next_cursor, callback) => {
			this.setState((currentState) => ({
				...currentState,
				next_cursor,
			}), callback)
		});
	};

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		if (prevProps.filterString !== this.props.filterString) {
			this.props.func('', this.props.filterString, (next_cursor, callback) => {
				this.setState((currentState) => ({
					...currentState,
					next_cursor,
				}), callback)
			});
		}
	}

	handleScroll = () => {
		if (Math.round(window.innerHeight + document.documentElement.scrollTop) !== document.documentElement.offsetHeight) return;
		this.onPage();
	};

	onPage = () => {
		const {next_cursor} = this.state;

		this.props.func(next_cursor, this.props.filterString, (next_cursor, callback) => {
			this.setState((currentState) => ({
				...currentState,
				next_cursor
			}), callback)
		});
	};

	render = () => {
		const {children = []} = this.props;
		return <React.Fragment>
			<Wrapper>
				{children.length > 0
					? children
					: <Loader/>}
			</Wrapper>
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
