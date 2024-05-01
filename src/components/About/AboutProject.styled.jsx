import styled from '@emotion/styled';
import Container from '../../shared/Container/Container';

export const AboutSection = styled.section`
    width:100%;
    margin-bottom: 60px;

    @media (min-width: 768px) {
        margin-bottom: 78px;
    }

    @media (min-width: 1440px) {
        margin-bottom: 150px;
    }
`;

export const AboutProjectContainer = styled(Container)`
  width: 100%;
  min-width: 320px;
  max-width: 375px;
  padding: 0 16px;
  margin: 0 auto;
  outline: none;

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