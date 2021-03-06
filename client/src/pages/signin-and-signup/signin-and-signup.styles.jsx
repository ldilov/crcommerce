import styled from 'styled-components';

export const SignInSignUpContainer = styled.div`
  width: 60vw;
  display: flex;
  justify-content: space-between;
  margin: 30px auto;

  @media screen and (max-width: 640px) {
    & {
      flex-direction: column;
      width: 100%;
      justify-content: space-between;
      align-items: center;
      margin: 0;
      padding: 0;
      flex-wrap: wrap;
    }
  }

  @media screen and (max-width: 1440px) {
    & {
      width: auto;
      justify-content: space-between;
      align-items: center;
      margin: 0;
      padding: 0;
    }
  }
`;
