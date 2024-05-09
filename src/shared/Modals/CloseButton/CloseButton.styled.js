import styled from 'styled-components';

export const StyledButton = styled.button`
  padding: 0;
  display: flex;
  gap: 4px;
  background: none;
  border: none;

  &:active span {
    color: #0b0b0b;
  }

  &:active svg {
    stroke: #0b0b0b;
  }

  @media screen and (min-width: 1440px) {
    &:hover span {
      color: #0b0b0b;
    }
    &:hover svg {
      stroke: #0b0b0b;
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
    align-self: flex-end;
    @media screen and (min-width: 768px) {
      display: inline;
    }
  }
  svg {
    stroke-width: 2px;
    stroke: rgba(11, 11, 11, 0.5);
  }
`;
