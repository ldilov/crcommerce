import React from 'react';
import { Link } from 'react-router-dom';

import './header.styles.scss';

const Header = () => {
	return (
		<div className='header'>
			<Link className='logo-container' to='/'></Link>
			<div className='options'>
				<Link to='/shop' className='option'>
					<span className='text'>SHOP</span>
					<span className='line -right'></span>
					<span className='line -top'></span>
					<span className='line -left'></span>
					<span className='line -bottom'></span>
				</Link>
				<Link to='/shop' className='option'>
					<span className='text'>CONTACT</span>
					<span className='line -right'></span>
					<span className='line -top'></span>
					<span className='line -left'></span>
					<span className='line -bottom'></span>
				</Link>
			</div>
		</div>
	);
};

export default React.memo(Header);
