import styled from 'styled-components';

export const StyledNavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  list-style: none;
  padding: 0;

  .active {
    font-weight: 600;
    font-size: 24px;
    line-height: 1.17;
    letter-spacing: -0.02em;
    color: #0b0b0b;
    outline: none;
    border: none;
    color: #f77d07;

    @media screen and (min-width: 768px) {
      font-size: 44px;
      line-height: 1.14;
    }
  }

  .link {
    font-weight: 600;
    font-size: 24px;
    line-height: 1.17;
    letter-spacing: -0.02em;
    color: #0b0b0b;
    outline: none;
    border: none;
    @media screen and (min-width: 768px) {
      font-size: 44px;
      line-height: 1.14;
    }

    &:hover {
      color: #f77d07;
    }
  }
`;

export const HoverContainer = styled.div`
  width: 261px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;

  @media screen and (min-width: 768px) {
    width: 466px;
  }
`;
