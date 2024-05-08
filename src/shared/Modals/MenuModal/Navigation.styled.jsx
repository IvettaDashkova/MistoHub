import styled from 'styled-components';

export const StyledNavList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;

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
    }
  }

  .link {
    font-family: 'Oddval', 'Inter', sans-serif;
    font-weight: 600;
    font-size: 24px;
    line-height: 1.17;
    letter-spacing: -0.02em;
    color: #0b0b0b;
    outline: none;
    border: none;
    @media screen and (min-width: 768px) {
      font-size: 44px;
    }

    /* &:hover {
      color: #f77d07;
    } */
  }
`;

export const StyledItem = styled.li`
  width: 261px;
  height: 50px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  padding: 0;

  &:hover a {
    color: #f77d07;
  }

  button {
    border: none;
    outline: none;
    background-color: transparent;
  }

  @media screen and (min-width: 768px) {
    width: 466px;
  }

  svg {
    width: 40px;
    height: 40px;

    @media screen and (min-width: 768px) {
      width: 80px;
      height: 80px;
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

  svg {
    width: 40px;
    height: 40px;

    @media screen and (min-width: 768px) {
      width: 60px;
      height: 60px;
    }
  }
`;