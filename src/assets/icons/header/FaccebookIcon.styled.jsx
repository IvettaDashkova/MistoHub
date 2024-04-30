import styled from 'styled-components';

export const FacebookStyled = styled.svg`
  .emblem-path {
    fill: #0b0b0b;
    transition: fill 0.5s;
  }

  .grad-color1,
  .grad-color2 {
    stop-color: #fff;
    transition: stop-color 0.5s;
  }

  &:hover,
  &:hover.short-header {
    .grad-color1 {
      stop-color: #18acfe;
      transition: stop-color 0.25s ease-in-out;
    }
    .grad-color2 {
      stop-color: #0165e1;
      transition: stop-color 0.25s ease-in-out;
    }
    .emblem-path {
      fill: #fff;
    }
  }

  &.short-header .emblem-path {
    fill: #fff;
  }

  &.short-header .grad-color1,
  &.short-header .grad-color2 {
    stop-color: #0b0b0b;
  }
`;
