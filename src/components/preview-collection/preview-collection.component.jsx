import React from 'react';

import './preview-collection.styles.scss';

import PreviewItem from '../preview-item/preview-item.component';

const MAX_PREVIEW_ITEMS = 4;

const PreviewCollection = ({ title, items }) => {
	return (
		<div className='collection-preview'>
			<h1 className='title'>{title.toUpperCase()}</h1>
			<div className='preview'>
				{items
					.filter((item, index) => index < MAX_PREVIEW_ITEMS)
					.map(({ id, ...itemProps }) => (
						<PreviewItem key={id} {...itemProps} />
					))}
			</div>
		</div>
	);
};

export default PreviewCollection;
