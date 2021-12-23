import Directory from '../../components/directory/directory.component';
import HomePageContainer from './homepage.styles';

import withRouter from '../../components/hocs/withRouter';

const HomePage = () => {
  return (
    <HomePageContainer>
      <Directory />
    </HomePageContainer>
  );
};

export default withRouter(HomePage);
