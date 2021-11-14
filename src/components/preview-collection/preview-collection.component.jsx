import React, { useMemo } from 'react';

import './preview-collection.styles.scss';

import PreviewItem from '../preview-item/preview-item.component';

const MAX_PREVIEW_ITEMS = 4;

const PreviewCollection = ({ title, items }) => {
	const previewItems = useMemo(() => {
		return items
			.filter((item, index) => index < MAX_PREVIEW_ITEMS)
			.map(({ id, ...itemProps }) => (
				<PreviewItem key={id} {...itemProps} />
			));
	}, []);

	return (
		<div className='collection-preview'>
			<h1 className='title'>{title.toUpperCase()}</h1>
			<div className='preview'>{previewItems}</div>
		</div>
	);
};

export default PreviewCollection;
