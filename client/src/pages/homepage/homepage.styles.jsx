import styled from 'styled-components';

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 80px;

  @media screen and (max-width: 800px) {
    flex: 1;
    min-width: 100%;
  }

  @media screen and (max-width: 800px) {
    padding: 0;
  }
`;

export default HomePageContainer;
