import { memo } from 'react';

import './navbar-button.styles.scss';

import { Link } from 'react-router-dom';

const NavbarButton = ({ name, uri }) => {
  return (
    <Link to={`/${uri}`} className='option'>
      <span className='text'>{name.toUpperCase()}</span>
      <span className='line -right'></span>
      <span className='line -top'></span>
      <span className='line -left'></span>
      <span className='line -bottom'></span>
    </Link>
  );
};

export default memo(NavbarButton, (currentProps, nextProps) => {
  return currentProps.name === nextProps.name && currentProps.uri === nextProps.uri;
});
