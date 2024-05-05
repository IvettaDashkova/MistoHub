import styled from 'styled-components';

export const BackgroundContainer = styled.div``;

export const PersonCircleImage = styled.img`
  position: absolute;
  top: 484px;
  left: 27px;
  width: 84px;
  height: 84px;
  border-radius: 50%;
  @media screen and (min-width: 375px) {
    top: 506px;
  }
  @media screen and (min-width: 768px) {
    top: 808px;
    left: 131px;
    width: 156px;
    height: 156px;
  }
  @media screen and (min-width: 1440px) {
    top: 597px;
    left: 746px;
    width: 215px;
    height: 215px;
  }
`;

export const PersonTriangleImage = styled.img`
  position: absolute;
  top: 441px;
  left: 121px;
  width: 75px;
  height: 65px;
  transform: rotate(39deg);
  @media screen and (min-width: 375px) {
    top: 451px;
    left: 121px;
  }
  @media screen and (min-width: 768px) {
    top: 668px;
    left: 317px;
    width: 131px;
    height: 114px;
  }
  @media screen and (min-width: 1440px) {
    top: 514px;
    left: 975px;
    width: 157px;
    height: 136px;
  }
`;

export const PersonStarImage = styled.img`
  position: absolute;
  top: 414px;
  right: 8px;
  width: 51px;
  height: 50 px;
  transform: rotate(-5deg);
  @media screen and (min-width: 375px) {
    top: 400px;
    right: 21px;
    width: 67px;
    height: 66px;
  }
  @media screen and (min-width: 768px) {
    top: 584px;
    right: 26px;
    width: 131px;
    height: 130px;
  }
  @media screen and (min-width: 1440px) {
    top: 286px;
    right: 184px;
    width: 175px;
    height: 174px;
  }
`;

export const CafeImage = styled.img`
  position: absolute;
  width: 121px;
  height: 163px;
  top: 505px;
  right: -11px;
  object-fit: contain;
  border-radius: 10px;
  transform: rotate(-19deg);
  @media screen and (min-width: 375px) {
    width: 149px;
    height: 200px;
    top: 520px;
    right: -20px;
  }
  @media screen and (min-width: 768px) {
    top: 768px;
    right: -23px;
    width: 252px;
    height: 338px;
  }
  @media screen and (min-width: 1440px) {
    top: 469px;
    right: -61px;
    width: 309px;
    height: 415px;
  }
`;

export const CafeOvalImage = styled.img`
  position: absolute;
  top: 393px;
  left: 178px;
  width: 74px;
  height: 33px;
  @media screen and (min-width: 375px) {
    top: 400px;
    left: 183px;
  }
  @media screen and (min-width: 768px) {
    top: 569px;
    left: 430px;
    width: 144px;
    height: 64px;
  }
  @media screen and (min-width: 1440px) {
    top: 281px;
    left: 811px;
    width: 191px;
    height: 86px;
  }
`;

export const CafeSquareImage = styled.img`
  position: absolute;
  top: 462px;
  left: 204px;
  width: 29px;
  height: 29px;
  transform: rotate(18deg);
  @media screen and (min-width: 375px) {
    left: 230px;
  }
  @media screen and (min-width: 768px) {
    top: 680px;
    left: 497px;
    width: 57px;
    height: 57px;
  }
  @media screen and (min-width: 1440px) {
    top: 420px;
    left: 934px;
    width: 76px;
    height: 77px;
  }
`;
