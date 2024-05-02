import styled from 'styled-components';

export const InstagramStyled = styled.svg`
  .emblem-path {
    fill: #0b0b0b;
    transition: fill 0.5s;
  }

  .gradient {
    stop-color: #fff;
    transition: stop-color 0.5s;
  }

  &.short-header .emblem-path {
    fill: #fff;
  }
  &.short-header .gradient {
    stop-color: #0b0b0b;
  }

  &:hover,
  &:hover.short-header {
    .emblem-path {
      fill: #fff;
    }

    .grad-color1 {
      stop-color: #f9ed32;
      transition: stop-color 0.25s ease-in-out;
    }
    .grad-color2 {
      stop-color: #ee2a7b;
      transition: stop-color 0.25s ease-in-out;
    }
    .grad-color3 {
      stop-color: #d22a8a;
      transition: stop-color 0.25s ease-in-out;
    }
    .grad-color4 {
      stop-color: #8b2ab2;
      transition: stop-color 0.25s ease-in-out;
    }
    .grad-color5 {
      stop-color: #1b2af0;
      transition: stop-color 0.25s ease-in-out;
    }
    .grad-color6 {
      stop-color: #002aff;
      transition: stop-color 0.25s ease-in-out;
    }
  }
`;
