import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

export const PreviewItemContainer = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  min-width: 150px;
  margin-bottom: 20px;
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;

  ${PreviewItemContainer}:hover & {
    opacity: 0.7;
  }
`;

export const PreviewFooter = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const NameText = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

export const PriceText = styled.span`
  width: 10%;
`;

export const CustomButtonContainer = styled(CustomButton)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;

  ${PreviewItemContainer}:hover & {
    display: block;
  }
`;
