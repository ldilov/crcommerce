import { memo } from 'react';

import { Line, OptionLink, Text } from './navbar-button.styles';

const NavbarButton = ({ name, uri }) => {
  return (
    <OptionLink to={`/${uri}`} className='option'>
      <Text>{name.toUpperCase()}</Text>
      <Line className='-right' />
      <Line className='-top' />
      <Line className='-left' />
      <Line className='-bottom' />
    </OptionLink>
  );
};

export default memo(NavbarButton, (currentProps, nextProps) => {
  return currentProps.name === nextProps.name && currentProps.uri === nextProps.uri;
});
