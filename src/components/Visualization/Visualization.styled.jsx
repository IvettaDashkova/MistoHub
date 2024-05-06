import styled from 'styled-components';
import cursorImage from '../../assets/images/visualization/cursor-image.png';
import Container from '../../shared/Container/Container';

export const VisualizationSection = styled.section`
  width: 100%;
`;

export const VisualizationContainer = styled(Container)`
  padding-bottom: 60px;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    max-width: 768px;
    padding-bottom: 120px;
    position: relative;
  }

  @media (min-width: 1440px) {
    max-width: 1440px;
    padding-bottom: 150px;
  }
`;

export const BlockName = styled.p`
  /* font-family: 'MacPaw Fixel Display', sans-serif; */
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.02em;
  color: rgba(11, 11, 11, 0.5);
  margin-bottom: 8px;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
    margin-bottom: 30px;
  }
`;

export const Title = styled.div`
  font-family: 'Oddval', sans-serif;
  font-weight: 600;
  font-size: 24px;
  line-height: 1.33;
  letter-spacing: -0.02em;
  color: #0b0b0b;
  text-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  margin-bottom: 32px;

  @media (min-width: 320px) and (max-width: 374px) {
    font-size: 20px;
    line-height: 1.5;
  }

  @media (min-width: 768px) {
    font-size: 45px;
    line-height: 1.11;
    letter-spacing: -0.02em;
    margin-bottom: 54px;
  }

  @media (min-width: 1440px) {
    font-size: 60px;
    line-height: 1.13;
    margin-bottom: 80px;
  }
`;

export const Card = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);

  @media (min-width: 320px) and (max-width: 374px) {
    margin: 0 auto;
    width: 288px;
    height: 288px;
  }

  @media (min-width: 375px) {
    width: 343px;
    height: 343px;
  }

  @media (min-width: 768px) {
    width: 704px;
    height: 580px;
  }

  @media (min-width: 1440px) {
    width: calc((100% - 30px) / 2);
  }
`;

export const CardTitle = styled.h2`
  text-align: center;
  margin-bottom: 15px;
  font-family: 'Oddval', sans-serif;
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: #ffffff;
  text-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);

  @media (min-width: 768px) {
    margin-bottom: 30px;
    font-size: 38px;
    line-height: 1.16;
  }

  @media (min-width: 1440px) {
    font-size: 48px;
    line-height: 1.08;
  }
`;

export const ButtonTour = styled.button`
  font-family: 'MacPaw Fixel Display', sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.02em;
  color: #0b0b0b;
  border-radius: 30px;
  padding: 15px 20px;
  box-shadow: 0 1px 2px 0 rgba(16, 24, 40, 0.05);
  background: #ffffff;
  border: none;
  transition: all 300ms ease-in-out;

  &:hover,
  &:focus {
    background: #f77d07;
    color: #ffffff;
  }

  @media (min-width: 768px) {
    padding: 15px 26px;
    font-size: 16px;
    line-height: 1.5;
    display: block;
    margin: 0 auto;
  }
`;

export const Arrow = styled.div`
  margin-top: 32px;
  display: flex;
  justify-content: center;

  @media (min-width: 768px) {
    margin-top: 60px;
  }

  @media (min-width: 1440px) {
    position: absolute;
    right: 120px;
    top: 0;
  }
`;

export const LeftArrow = styled.button`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: #ffffff;
  border: 2px solid #f77d07;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 300ms ease-in-out;

  & svg {
    width: 22px;
    height: 22px;
    fill: #f77d07;
  }

  &.enabled {
    background: #f77d07;

    & svg {
      fill: #ffffff;
    }
  }

  @media (min-width: 768px) {
    width: 60px;
    height: 60px;

    & svg {
      width: 30px;
      height: 30px;
    }
  }

  @media (min-width: 1440px) {
    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const RightArrow = styled(LeftArrow)`
  margin-left: 20px;
`;

export const CardsContainer = styled.div`
  @media (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const ModalWrapperTour = styled.div`
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 100%;

  & .psv-navbar {
    background-color: transparent;
    display: flex;
    justify-content: center;

    cursor: url(${cursorImage}), default;

    margin-bottom: 30px;
  }

  & .psv-canvas {
    cursor: url(${cursorImage}), default;
  }

  & .psv-button {
    color: #ffffff;
    width: 35px;
    height: 35px;
    background: transparent;
    transition: all 300ms ease-in-out;

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      transform: scale(1.3);
    }

    @media (min-width: 768px) {
      width: 40px;
      height: 40px;
    }
  }

  & .psv-button-svg {
    width: 20px;
    height: 20px;
    transform: scale(1.3);
    transition: all 300ms ease-in-out;

    @media (min-width: 768px) {
      width: 24px;
      height: 24px;
    }
  }

  & .psv-zoom-range.psv-button {
    display: none;
  }

  & .psv-button:not(:first-child) {
    margin-left: 5px;

    @media (min-width: 768px) {
      margin-left: 20px;
    }
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;

  width: 40px;
  height: 40px;
  stroke: #ffffff;
  border-radius: 50%;
  border: none;
  background-color: transparent;
  transition: all 300ms ease-in-out;

  display: flex;
  align-items: center;
  justify-content: center;

  & svg {
    width: 20px;
    height: 20px;
  }

  @media (min-width: 768px) {
    & svg {
      width: 24px;
      height: 24px;
    }
  }

  @media (min-width: 1440px) {
    &:hover {
      transform: scale(1.3);
    }
  }
`;
