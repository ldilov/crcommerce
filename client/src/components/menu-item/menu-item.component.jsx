import { BackgroundImage, Content, MenuItemContainer, Subtitle, Title } from './menu-item.styles';
import withRouter from '../hocs/withRouter';

const MenuItem = ({ title, imageUrl, size, linkUrl, navigate, location }) => {
  return (
    <MenuItemContainer size={size} onClick={() => navigate(`${location.pathname}${linkUrl}`)}>
      <BackgroundImage style={{ backgroundImage: `url(${imageUrl})` }} />
      <Content>
        <Title>{title.toUpperCase()}</Title>
        <Subtitle>Shop now</Subtitle>
      </Content>
    </MenuItemContainer>
  );
};

export default withRouter(MenuItem);
