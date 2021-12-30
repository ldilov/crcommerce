import styled from 'styled-components';
import FormInput from '../form-input/form-input.component';
import { GroupContainer } from '../form-input/form-input.styles';

export const SignInContainer = styled.div`
  width: 25vw;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1440px) {
    & {
      width: 30vw;
    }
  }

  @media screen and (max-width: 640px) {
    & {
      width: 90vw;
    }
  }
`;

export const FormInputContainer = styled(FormInput)`
  padding: 15px 0;
  margin: 20px 0;

  @media screen and (max-width: 640px) {
    padding: 12px;

    + ${GroupContainer} {
      margin: 20px 0;
    }
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1276px) {
    & {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }
`;

export const TitleText = styled.h2`
  margin: 10px 0;
`;
