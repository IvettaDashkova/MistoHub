import styled from 'styled-components';

export const StyledButton = styled.button`
  width: 97px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  background: none;
  border: none;

  &:active span {
    color: #0b0b0b;
  }

  &:active svg {
    fill: #0b0b0b;
  }

  @media screen and (min-width: 1440px) {
    &:hover span {
      color: #0b0b0b;
    }
    &:hover svg {
      fill: #0b0b0b;
    }
  }

  span {
    font-family: inherit;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: -0.02em;
    color: rgba(11, 11, 11, 0.5);
    display: none;
    @media screen and (min-width: 768px) {
      display: inline;
    }
  }
  svg {
    margin-top: 3px;
    stroke-width: 2px;
    fill: rgba(11, 11, 11, 0.5);
  }
`;
