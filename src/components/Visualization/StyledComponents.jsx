import styled from 'styled-components';

export const ContainerVisual = styled.div`
  min-width: 320px;
  max-width: 375px;
  margin: 0 auto;
  padding: 26px 16px 60px;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;

  @media (min-width: 768px) {
    max-width: 768px;
    padding: 54px 32px 120px;
    position: relative;
  }

  @media (min-width: 1440px) {
    max-width: 1440px;
    padding: 54px 120px 150px;
  }
`;

export const TitleContainer = styled.div`
  font-family: 'Oddval', sans-serif;
  font-weight: 600;
  font-size: 24px;
  line-height: 1.33;
  letter-spacing: -0.02em;
  color: #0b0b0b;
  text-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  margin-bottom: 32px;

  @media screen and (min-width: 320px) and (max-width: 374px) {
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
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);

  @media screen and (min-width: 320px) and (max-width: 374px) {
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
    height: 580px;
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
    font-weight: 600;
    font-size: 38px;
    line-height: 1.16;
  }

  @media (min-width: 1440px) {
    font-size: 48px;
    line-height: 1.08;
  }
`;

export const ButtonTour = styled.button`
  border-radius: 30px;
  padding: 15px 20px;
  box-shadow: 0 1px 2px 0 rgba(16, 24, 40, 0.05);
  background: #ffffff;
  border: none;

  font-family: 'MacPaw Fixel Display', sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.02em;
  color: #0b0b0b;
  cursor: pointer;
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

  @media (min-width: 1440px) {
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
    top: 5px;
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
  fill: #f77d07;
  transition: all 300ms ease-in-out;

  &.enabled {
    background: #f77d07;
    fill: #ffffff;
  }

  &:hover {
    transform: scale(1.1);
  }

  @media (min-width: 768px) {
    width: 60px;
    height: 60px;
  }

  @media (min-width: 1440px) {
    width: 60px;
    height: 60px;
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

/* ================= стилі для 3D туру ======================*/

export const ModalWrapperTour = styled.div`
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 100%;
  cursor: grab;
  /* cursor: move; */

  & .psv-navbar {
    background-color: transparent;
    display: flex;
    justify-content: center;
    bottom: 10px;
  }

  & .psv--has {
    cursor: grab;
  }

  & :active {
    cursor: grab;
  }

  & .psv-button {
    color: #ffffff;
    margin-left: 20px;
    transition: all 300ms ease-in-out;

    &:hover,
    &:focus {
      transform: scale(1.3);
    }
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: transparent;
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  stroke: #ffffff;
  padding: 5px;
  transition: all 300ms ease-in-out;

  &:hover,
  &:focus {
    transform: scale(1.3);
  }
`;
