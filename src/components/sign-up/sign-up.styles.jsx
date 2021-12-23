import styled from 'styled-components';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { GroupContainer } from '../form-input/form-input.styles';

export const SignupContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 25vw;

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

export const TitleText = styled.h2`
  margin: 10px 0;
`;

export const SignupFormContainer = styled.form`
  @media screen and (max-width: 640px) {
    & {
      display: flex;
      flex-direction: column;
    }
  }
`;

export const FormInputContainer = styled(FormInput)`
  padding: 15px 0;
  margin: 5px 0;

  @media screen and (max-width: 640px) {
    padding: 12px;

    + ${GroupContainer} {
      margin: 20px 0;
    }
  }
`;

export const CustomButtonContainer = styled(CustomButton)`
  @media screen and (max-width: 1440px) {
    & {
      width: 100%;
    }
  }

  @media screen and (max-width: 640px) {
    & {
      width: 100%;
    }
`;
