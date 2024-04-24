import styled from '@emotion/styled';
import buildingOne from '../../assets/about/building1.svg';
import buildingTwo from '../../assets/about/building2.svg';
import buildingThree from '../../assets/about/building3.svg';
import buildingFour from '../../assets/about/building4.svg';

export const BuildingSection = styled.section`
  width: 1440px;
  margin: 0 auto;
  margin-bottom: 150px;
  padding: 0 120px;
  position: relative;

  @media(max-width: 768px) {
    width: 768px;
    padding: 0 32px;
  }
  @media(max-width: 375px) {
    max-width: 375px;
    padding: 0 16px;
  }
`;

export const BuildingTitle = styled.h2`
  font-weight: 600;
  font-size: 60px;
  line-height: 1.13;
  letter-spacing: -0.02em;
  color: #0b0b0b;
  padding-bottom: 30px;
  padding-right: 200px;
`;
export const Mistohub = styled.span`
  color: #f77d07;
  text-transform: uppercase;
`;

export const BuildingText = styled.p`
  font-family: MacPaw Fixel Display;
  font-size: 28px;
  font-weight: 500;
  line-height: 1.21;
  letter-spacing: -0.02em;
  text-align: left;
  color: #0b0b0bcc;
  margin-bottom: 40px;
  padding-right: 280px;

  @media (max-width: 1024px) {
      margin-bottom: 60px;
  }
`;

export const BuildingImg = styled.img`
  width: 100%;
  border-radius: 20px;
  margin-bottom: 31px;
`;

export const Bicon = styled.span`
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  position: absolute;
`;
export const BIconOne = styled(Bicon)`
  background-image: url(${buildingOne});
  top: 415px;
  left: 10px;
  width: 138px;
  height: 170px;
`;
export const BIconTwo = styled(Bicon)`
  background-image: url(${buildingTwo});
  left: 33px;
  top: 699px;
  width: 65px;
  height: 65px;
`;
export const BIconThree = styled(Bicon)`
  background-image: url(${buildingThree});
  top: 615px;
  right: 8px;
  width: 82px;
  height: 113px;
`;
export const BIconFour = styled(Bicon)`
  background-image: url(${buildingFour});
  bottom: 0;
  right: 3px;
  width: 187px;
  height: 258px;
`;
