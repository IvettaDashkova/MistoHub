import styled from 'styled-components';

export const BackgroundContainer = styled.div`
  .mainVector {
    position: absolute;
    top: 0;
    left: 0;
    fill: #f77d07;
    width: 375px;
    height: 740px;
    z-index: -1;
  }
`;

export const PersonCircleImage = styled.img`
  position: absolute;
  top: 506px;
  left: 27px;
  border-radius: 50%;
  width: 84px;
  height: 84px;
`;

export const PersonTriangleImage = styled.img`
  position: absolute;
  top: 451px;
  left: 121px;
  width: 75px;
  height: 65px;
  transform: rotate(39deg);
`;

export const PersonStarImage = styled.img`
  position: absolute;
  top: 400px;
  right: 21px;
  width: 67px;
  height: 66px;
  transform: rotate(-5deg);
`;

export const CafeImage = styled.img`
  position: absolute;
  width: 149px;
  height: 200px;
  top: 520px;
  right: -20px;
  object-fit: contain;
  border-radius: 10px;
  transform: rotate(-19deg);
`;

export const CafeOvalImage = styled.img`
  position: absolute;
  top: 400px;
  left: 183px;
  width: 74px;
  height: 33px;
`;

export const CafeSquareImage = styled.img`
  position: absolute;
  top: 462px;
  left: 230px;
  width: 29px;
  height: 29px;
  transform: rotate(18deg);
`;
