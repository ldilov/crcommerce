import React from 'react';
import withRouter from '../hocs/withRouter';

import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size, linkUrl, navigate, location }) => {
	return (
		<div
			className={`${size} menu-item`}
			onClick={() => navigate(`${location.pathname}${linkUrl}`)}
		>
			<div
				className='background-image'
				style={{ backgroundImage: `url(${imageUrl})` }}
			/>
			<div className='content'>
				<h1 className='title'>{title.toUpperCase()}</h1>
				<span className='subtitle'>Shop now</span>
			</div>
		</div>
	);
};

export default withRouter(MenuItem);
