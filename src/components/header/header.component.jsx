import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import './header.styles.scss';

// Components
import NavbarButton from '../navbar-button/navbar-button.component';

const Header = ({ currentUser }) => {
	return (
		<div className='header'>
			<Link className='logo-container' to='/'></Link>
			<div className='options'>
				<NavbarButton name='shop' uri='shop' />
				<NavbarButton name='contact' uri='contact' />
				{currentUser ? (
					<NavbarButton name='sign out' uri='signout' />
				) : (
					<NavbarButton name='sign in' uri='signin' />
				)}
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		currentUser: state.user.currentUser,
	};
};

export default connect(mapStateToProps)(React.memo(Header));
