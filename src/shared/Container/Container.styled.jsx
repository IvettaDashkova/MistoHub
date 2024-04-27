import styled from 'styled-components';

export const StyledContainer = styled.div`
  width: 100%;
  min-width: 320px;
  max-width: 375px;
  padding: 0 16px;
  margin: 0 auto;
  @media (min-width: 768px) {
    width: 768px;
    min-width: unset;
    max-width: unset;
    padding: 0 32px;
  }
  
  @media (min-width: 1440px) {
    width: 1440px;
    padding: 0 120px;
  }
`;