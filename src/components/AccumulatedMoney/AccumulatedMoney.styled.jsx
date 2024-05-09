import { css, keyframes } from '@emotion/react';

import backgroundImageForMobile from '../../assets/AccumulatedMoney/back-for-mobile.png';
import backgroundImageForTablet from '../../assets/AccumulatedMoney/back-for-tablet.png';
import backgroundImageForDesktop from '../../assets/AccumulatedMoney/back-for-desktop.png';

import styled from '@emotion/styled';

const progressAnimation = (props) => keyframes`
  from {
    width: 0;
  }
  to {
    width: ${props.progress}%;
  }
`;

const slideInFromBottom = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0%);
    opacity: 1;
  }
`;
export const ContainerWrapper = styled.section`
  ${(props) => props.isDesktop && 'display:flex'};
  background-image: url('${backgroundImageForMobile}');
  background-size: cover;
  background-position: center;
  padding: 60px 0;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    padding: 80px 0;
    background-image: url('${backgroundImageForTablet}');
  }

  @media screen and (min-width: 1440px) {
    padding: 120px 60px 100px;
    background-image: url('${backgroundImageForDesktop}');

    > div {
      width: 100%;
      margin-left: 113px;
      margin-right: 83px;
    }

    > ul {
      color: #ffffff;
      display: flex;
      flex-direction: column;
      gap: 24px;
      animation: ${({ goAnimation }) =>
        goAnimation
          ? css`
              ${slideInFromBottom} 3s ease-in-out
            `
          : 'none'};

      backdrop-filter: blur(5px);
    }

    button:hover {
      background-color: #e97200;
    }
  }

  h4 {
    font-family: 'Oddval', sans-serif;
    font-weight: 600;
    font-size: 10px;
    line-height: 1.2;
    letter-spacing: -0.02em;
    margin-bottom: 2px;

    @media screen and (min-width: 768px) {
      font-size: 14px;
      line-height: 1.3;
    }
  }

  button {
    font-family: 'FixelDisplay', sans-serif;
    height: 48px;
    min-width: 171px;
    font-size: 14px;
    font-weight: 600;
    line-height: 1.3;
    letter-spacing: -0.02em;
    background-color: #f77d07;
    border-radius: 30px;
    border: none;
    color: #ffffff;
    padding: 15px 20px;
    display: flex;
    margin: 0 auto;
    transition: all 0.25s ease-in-out;

    @media screen and (min-width: 768px) {
      height: 64px;
      width: 230px;
      padding: 20px 40px;
      font-size: 16px;
      align-items: center;
      line-height: 1.5;
      min-width: 230px;
    }

    @media screen and (min-width: 1440px) {
      width: 260px;
      height: 70px;
      padding: 23px 46px;
      font-size: 18px;
    }
  }

  button:active {
    background-color: #e3e3e3;
    color: #898b90;
  }
`;

export const TitleContainer = styled.div`
  padding: 0 65px;
  margin-bottom: 103px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  text-align: center;
  color: #ffffff;
  font-weight: 600;
  letter-spacing: -0.02em;

  @media screen and (min-width: 768px) {
    margin-bottom: 173px;
    gap: 30px;
    padding: 0 204px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 203px;
    padding: 0;
  }

  > h2 {
    font-family: 'Oddval', sans-serif;
    font-size: 18px;
    line-height: 1.2;
    min-width: 245px;
    @media screen and (min-width: 768px) {
      font-size: 22px;
      line-height: 1.2;
    }

    @media screen and (min-width: 1440px) {
      font-size: 28px;
      line-height: 1.15;
    }
  }

  > p {
    font-size: 50px;
    font-family: 'FixelDisplay', sans-serif;

    @media screen and (min-width: 768px) {
      font-size: 85px;
      line-height: 0.88;
    }

    @media screen and (min-width: 1440px) {
      font-size: 120px;
      line-height: 1;
    }
  }
`;

export const ProgressBar = styled.div`
  display: flex;
  margin: 0 auto 55px;
  padding: 0 30px;
  @media screen and (min-width: 768px) {
    margin-bottom: 116px;
    padding: 0 117px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 102px;
    padding: 0;
  }

  > div {
    width: 100%;
    height: 10px;
    background-color: #7e7e7e;
    border-radius: 100px;
    position: relative;

    @media screen and (min-width: 768px) {
      height: 20px;
    }
  }
`;

export const Accumulated = styled.div`
  position: relative;
  width: ${(props) => props.progress}%;
  height: 10px;
  background-color: #ffffff;
  z-index: 15;
  border-radius: 100px;
  animation: ${(props) => progressAnimation(props)} 3s ease-in-out forwards;

  @media screen and (min-width: 768px) {
    height: 20px;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    transform: translateX(50%) translateY(-30%);
    width: 24px;
    height: 24px;
    background-color: #fff;
    border-radius: 50%;
    z-index: 2;
    box-shadow: 0 0 0 8px rgba(255, 255, 255, 0.2);

    @media screen and (min-width: 768px) {
      width: 48px;
      height: 48px;
      box-shadow: 0 0 0 8px rgba(255, 255, 255, 0.2);
    }
  }
`;

export const AmountGif = styled.div`
  font-family: 'FixelDisplay', sans-serif;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  line-height: 1.3;
  font-weight: 600;
  letter-spacing: -0.02em;
  top: -62px;
  right: -41px;
  width: 84px;
  height: 42px;
  border-radius: 45px;
  background-color: #fff;
  opacity: ${(props) => (props.progress > 0 ? 1 : 0)};
  transition: opacity 0.5s ease;

  @media screen and (min-width: 768px) {
    font-size: 28px;
    width: 162px;
    height: 82px;
    transform: translateX(50%) translateY(-145%);
    top: 0;
    right: 0;
  }

  &::before {
    content: '';
    position: absolute;
    bottom: -9px;
    left: 50%;
    transform: translateX(-50%);
    border-width: 14px 14px 0;
    border-style: solid;
    border-color: #fff transparent transparent;

    @media screen and (min-width: 768px) {
      border-width: 18px 18px 0;
      bottom: -13px;
    }
  }

  &::after {
    font-family: 'FixelDisplay', sans-serif;
    content: 'Зібрано';
    position: absolute;
    bottom: -65px;
    font-size: 12px;
    color: #ffffff;
    font-weight: 500;
    line-height: 1.3;

    @media screen and (min-width: 768px) {
      font-size: 20px;
      bottom: -112px;
    }
  }
`;

export const CardsList = styled.ul`
  display: flex;
  color: #fff;
  gap: 8px;
  overflow-x: auto;
  padding: 14px 16px 28px;

  margin-bottom: 32px;
  width: 100%;

  @media screen and (min-width: 768px) {
    margin-bottom: 60px;
  }

  &::-webkit-scrollbar {
    height: 6px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 8px;
    margin: 80px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(253, 253, 253, 0.4);
    border-radius: 8px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }
`;

export const MadeListItem = styled.li`
  ${(props) => props.isDesktop && 'display: flex;'};
  position: relative;
  background: #ffffff1a;
  backdrop-filter: blur(5px);
  border-radius: 10px;
  border: 1px solid #ffffff14;
  padding: 10px;

  min-width: 140px;

  @media screen and (min-width: 768px) {
    padding: 20px;
    min-width: 243px;
  }

  @media screen and (min-width: 1440px) {
    padding: 20px;
    max-width: 243px;
  }

  ul {
    padding-left: 16px;
    list-style-type: disc;
    display: flex;
    flex-direction: column;
    gap: 2px;

    @media screen and (min-width: 1440px) {
    }

    li {
      font-family: 'FixelDisplay', sans-serif;
      font-size: 8px;
      line-height: 1.2;
      letter-spacing: -0.02em;

      @media screen and (min-width: 768px) {
        font-size: 10px;
      }

      @media screen and (min-width: 1440px) {
      }
    }
  }
`;

export const NeedToDoItem = styled.li`
  background: #ffffff1a;
  border-radius: 10px;
  border: 1px solid #ffffff14;
  height: 66px;
  min-width: 134px;
  position: relative;
  backdrop-filter: blur(5px);
  padding: 10px;

  @media screen and (min-width: 768px) {
    min-width: 215px;
    min-height: 100px;
    padding: 20px;
  }

  @media screen and (min-width: 1440px) {
    min-width: 273px;
    display: flex;
  }

  p {
    font-family: 'FixelDisplay', sans-serif;
    font-weight: 500;
    font-size: 8px;
    line-height: 1.2;
    letter-spacing: -0.02em;

    @media screen and (min-width: 768px) {
      font-size: 10px;
    }
  }
`;

export const SVGContainer = styled.div`
  ${(props) =>
    !props.isDesktop &&
    'position: absolute; left: 50%; top: -14px; margin-right: 5px;'};

  width: 20px;
  height: 20px;

  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateX(-50%);
  background-color: #8ccc3a;
  font-size: 12px;

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }

  @media screen and (min-width: 1440px) {
    min-width: 20px;
    height: 20px;
    margin-right: 10px;
    transform: none;
    line-height: 1.3;
    letter-spacing: -0.02em;
  }

  > svg {
    width: 10px;
    height: 10px;
  }
`;

export const SVGContainerForNeedItem = styled(SVGContainer)`
  background-color: #f77d07;
`;
