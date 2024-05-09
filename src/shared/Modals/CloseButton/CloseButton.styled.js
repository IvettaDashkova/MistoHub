import styled from 'styled-components';

export const StyledButton = styled.button`
  width: 97px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  background: none;
  outline: none;
  border: none;

  span {
    font-family: inherit;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: -0.02em;
    color: rgba(11, 11, 11, 0.5);
    margin: 0;
  }
  svg {
    stroke-width: 2px;
    fill: rgba(11, 11, 11, 0.5);
  }
`;
