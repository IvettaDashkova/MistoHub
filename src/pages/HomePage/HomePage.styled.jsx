import styled from '@emotion/styled';
import Container from '../../shared/Container/Container';

export const SomeSectionContainer = styled(Container)`
  /* display: flex;
  justify-content: center;
  align-items: center; */
  /* padding-top: 500px; */

  /* background-color: #d2d2d2; */
  div {
    height: 700px;
  }

  @media screen and (min-width: 768px) {
    div {
      height: 1024px;
    }
  }
  @media screen and (min-width: 1440px) {
    div {
      height: 880px;
    }
  }
  .vector-svg {
    fill: green;
    stroke: red;
  }
`;
