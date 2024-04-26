import styled from '@emotion/styled';
import buildingOne from '../../assets/about/building1.svg';
import buildingTwo from '../../assets/about/building2.svg';
import buildingThree from '../../assets/about/building3.svg';
import buildingFour from '../../assets/about/building4.svg';

export const BuildingSection = styled.section`
  margin-bottom: 60px;
  font-family: 'FixelDisplay';
  width: 100%;

  .container {
    min-width: 320px;
    max-width: 375px;
    padding: 0 16px;
    margin: 0 auto;
  }

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
    width: 100%;
    max-width: 100%;
    border-radius: 20px;
    margin-bottom: 16px;
  }

  .building-img-container {
    position: relative;
  }

  @media (min-width: 768px) {
    margin-bottom: 78px;

    .container {
      width: 768px;
      padding: 0 32px;
      max-width: unset;
      min-width: unset;
    }

    .building-title {
      font-size: 45px;
      line-height: 1.11;
      margin-bottom: 30px;
    }
    accent {
      color: #f77d07;
      text-transform: uppercase;
    }
    .building-text {
      font-size: 24px;
      line-height: 1.33;
    }

    .building-img {
      width: 100%;
      border-radius: 20px;
      margin-bottom: 14px;
    }
  }

  @media (min-width: 1440px) {
    margin-bottom: 150px;

    .container {
      width: 1440px;
      padding: 0 120px;
    }

    .building-title {
      font-size: 60px;
      line-height: 1.13;
      margin-bottom: 30px;
    }
    accent {
      color: #f77d07;
      text-transform: uppercase;
    }
    .building-text {
      font-size: 28px;
      line-height: 1.21;
      margin-bottom: 40px;
    }

    .building-img {
      width: 100%;
      border-radius: 20px;
      margin-bottom: 31px;
    }
  }
`;

export const Bicon = styled.span`
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  position: absolute;
  fill: #f77d07;
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
  left: -22px;
  top: 221px;
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
  bottom: 282px;
  right: -89px;
  width: 56px;
  height: 119px;
  transform: rotate(-154deg);
`;
export const BIconFour = styled(Bicon)`
  background-image: url(${buildingFour});
  bottom: -7px;
  right: -152px;
  width: 266px;
  height: 183px;
  transform: rotate(-68.59deg);
}
  `;
