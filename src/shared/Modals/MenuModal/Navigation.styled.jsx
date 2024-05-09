import styled from 'styled-components';

export const StyledNavList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;

  a {
    font-family: 'Oddval', 'Inter', sans-serif;
    font-weight: 600;
    font-size: 24px;
    line-height: 1.17;
    letter-spacing: -0.02em;
    color: #0b0b0b;
    outline: none;
    border: none;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  .active {
    /* font-family: 'Oddval', 'Inter', sans-serif;
    font-weight: 600;
    font-size: 24px;
    line-height: 1.17;
    letter-spacing: -0.02em; */
    /* color: #0b0b0b; */
    /* outline: none;
    border: none; */
    color: #f77d07;

    svg {
      display: none;
    }

    &:active svg {
      display: block;
    }

    @media screen and (min-width: 1440px) {
      &:hover svg {
        display: block;
      }
    }

    @media screen and (min-width: 768px) {
      font-size: 44px;
    }
  }

  .link {
    /* font-family: 'Oddval', 'Inter', sans-serif;
    font-weight: 600;
    font-size: 24px;
    line-height: 1.17;
    letter-spacing: -0.02em;
    color: #0b0b0b;
    outline: none;
    border: none;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between; */

    svg {
      display: none;
    }

    &:active svg {
      display: block;
    }

    @media screen and (min-width: 1440px) {
      &:hover svg {
        display: block;
      }
    }

    @media screen and (min-width: 768px) {
      font-size: 44px;
    }
  }

  /* a svg {
    display: none;
  } */

  /* a:hover svg {
    display: block;
  } */
`;

export const StyledItem = styled.li`
  width: 261px;
  height: 28px;
  margin-bottom: 10px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  padding: 0;

  &:active a {
    color: #f77d07;
  }

  @media screen and (min-width: 1440px) {
    &:hover a {
      color: #f77d07;
    }
  }

  button {
    border: none;
    outline: none;
    background-color: transparent;
  }

  @media screen and (min-width: 768px) {
    height: 50px;
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
  width: 265px;
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
