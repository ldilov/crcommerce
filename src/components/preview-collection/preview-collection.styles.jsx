import styled from 'styled-components';

export const PreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  @media screen and (max-width: 800px) {
    & {
      align-items: center;
    }
  }
`;

export const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 25px;
`;

export const Preview = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media screen and (max-width: 800px) {
    & {
      max-width: 400px;
    }

    .preview-item {
      min-width: 190px;
    }
  }
`;
