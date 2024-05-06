import styled from '@emotion/styled';
import buildingOne from '../../assets/about/building1.svg';
import buildingTwo from '../../assets/about/building2.svg';
import buildingThree from '../../assets/about/building3.svg';
import buildingFour from '../../assets/about/building4.svg';
import { AboutProjectContainer } from './AboutProject.styled';

export const BuildingContainer = styled(AboutProjectContainer)`
  margin-bottom: 60px;
  width: 100%;

  .building-title {
    font-family: 'Oddval';
    font-weight: 600;
    font-size: 24px;
    line-height: 1.33;
    letter-spacing: -0.02em;
    color: #0b0b0b;
    margin-bottom: 14px;
  }

  .accent {
    color: #f77d07;
    text-transform: uppercase;
  }

  .building-text {
    font-size: 16px;
    font-weight: 500;
    line-height: 1.25;
    letter-spacing: -0.02em;
    text-align: left;
    color: #0b0b0bcc;
    margin-bottom: 40px;
  }
  .building-img {
    max-width: 100%;
    object-fit: contain;
    border-radius: 20px;
  }

  .building-img-container {
    position: relative;
  }

  @media (min-width: 768px) {
    margin-bottom: 78px;

    .building-title {
      font-size: 45px;
      line-height: 1.11;
      margin-bottom: 30px;
    }
    .building-text {
      font-size: 24px;
      line-height: 1.33;
    }
  }

  @media (min-width: 1440px) {
    margin-bottom: 181px;

    .building-title {
      font-size: 60px;
      line-height: 1.13;
      margin-bottom: 30px;
    }
    .building-text {
      font-size: 28px;
      line-height: 1.21;
      padding-right: 120px;
      margin-bottom: 40px;
    }
  }
`;

export const Bicon = styled.div`
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  position: absolute;
`;

export const BIconOne = styled(Bicon)`
  background-image: url(${buildingOne});
  top: 93px;
  left: -50px;
  width: 91px;
  height: 45px;
  transform: rotate(-59deg);

  @media (min-width: 768px) {
    top: 123px;
    left: -80px;
    width: 151px;
    height: 75px;
  }
  @media (min-width: 1440px) {
    top: 190px;
    left: -150px;
    width: 182px;
    height: 91px;
  }
`;
export const BIconTwo = styled(Bicon)`
  background-image: url(${buildingTwo});
  top: 221px;
  left: -22px;
  width: 40px;
  height: 40px;

  @media (min-width: 768px) {
    top: 332px;
    left: -39px;
    width: 65px;
    height: 65px;
  }
  @media (min-width: 1440px) {
    left: -87px;
    top: 423px;
    width: 65px;
    height: 65px;
  }
`;
export const BIconThree = styled(Bicon)`
  background-image: url(${buildingThree});
  top: 49%;
  left: 94%;
  width: 27px;
  height: 59px;
  transform: rotate(-154deg);

  @media (min-width: 768px) {
    top: 169px;
    left: 687px;
    width: 55px;
    height: 118px;
  }
  @media (min-width: 1440px) {
    top: 340px;
    left: 1230px;
    width: 56px;
    height: 119px;
  }
`;
export const BIconFour = styled(Bicon)`
  background-image: url(${buildingFour});
  top: 80%;
  left: 78%;
  width: 100px;
  height: 69px;
  transform: rotate(-68.59deg);
  
  @media (min-width: 768px) {
    top: 400px;
    left: 580px;
    width: 199px;
    height: 137px;
  }
  @media (min-width: 1440px) {
    top: 570px;
    left: 1084px;
    width: 266px;
    height: 183px;
    }
`;
