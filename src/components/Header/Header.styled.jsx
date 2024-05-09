import styled from 'styled-components';

import Container from '/src/shared/Container/Container';

export const StyledHeader = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 100;
  background-color: transparent;

  .hidden-wrap {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 70px;

    transition:
      opacity 1s ease-in-out,
      height 1ms ease-in-out 0.1s,
      overflow 1ms ease-in-out 0.1s,
      background-color 700ms ease-in-out,
      backdrop-filter 700ms ease-in-out;
  }

  .dark-header.hidden-wrap {
    background-color: rgba(255, 255, 255, 0.07);
    backdrop-filter: blur(17.4px);
  }

  .hidden-wrap.hidden {
    height: 0;
    opacity: 0;
    overflow: hidden;
    transition:
      opacity 1s ease-in-out,
      height 1ms ease-in-out 1s,
      overflow 1ms ease-in-out 1s;
  }

  .main-logo {
    fill: #ffffff;
    transition: fill 0.5s;
  }

  .burger-menu-icon {
    stroke: #ffffff;
    transition: fill 1s;
  }

  .burger-menu-icon.dark-header {
    stroke: #0b0b0b;
  }

  .main-logo.dark-header {
    fill: #0b0b0b;
  }

  @media screen and (min-width: 768px) {
    .hidden-wrap {
      height: 117px;
    }
  }

  @media screen and (min-width: 1440px) {
    .hidden-wrap {
      height: 125px;
    }
  }
`;

export const HeaderContainer = styled(Container)`
  padding: 16px 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    padding: 16px 32px;
  }

  @media screen and (min-width: 1440px) {
    padding: 20px 120px;
  }

  .menu-wrapper {
    width: 100%;
    max-width: 376px;
    height: 85px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  button {
    padding: 0;
    border: none;
    background-color: transparent;
    display: flex;
    svg {
      align-self: center;
    }
  }

  .btn-clouds {
    position: relative;
    width: 100%;
    max-width: 180px;

    span {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      font-weight: 600;
      font-size: 14px;
      line-height: 1.29; //18px
      letter-spacing: -1px;
      color: #fff;
    }
  }

  svg.cloud-icon {
    fill: #f77d07;
    transform: rotate(-4deg);
  }

  .btn-clouds:hover .cloud-icon {
    fill: #e97200;
    transition: fill 0.25s ease-in-out;
  }

  .btn-clouds:active .cloud-icon {
    fill: #e3e3e3;
    transition: fill 0.25s ease-in-out;
  }
`;
