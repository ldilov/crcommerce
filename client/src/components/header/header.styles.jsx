import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const MediaQueries = css`
  @media screen and (max-width: 640px) {
    & {
      justify-content: center;
      width: 90vw;

      .options {
        width: 100%;
      }

      .logo-container {
        display: none;
      }
    }
  }

  @media screen and (max-width: 800px) {
    & {
      justify-content: center;
      align-items: center;
      width: 90vw;

      .options {
        width: 100%;
        justify-content: center;
      }

      .logo-container {
        display: none;
      }
    }
`;

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  ${MediaQueries}
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;

export const OptionsContainer = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
