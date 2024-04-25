import styled from '@emotion/styled';
import backgroundImage from './Rectangle 42862.png';
import { Swiper, SwiperSlide } from 'swiper/react';

export const ContainerWrapper = styled.section`
  background-image: url('${backgroundImage}');
  background-size: cover;
  background-position: center;
  padding: 60px 0;
  padding-left: 16px;

  @media screen and (min-width: 768px) {
    padding: 80px 0;
    padding-left: 64px;
  }

  > button {
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
    margin-left: calc(50%);
    transform: translateX(-50%);

    @media screen and (min-width: 768px) {
      padding: 20px 40px;
      font-size: 16px;
      align-items: center;
      line-height: 1.5;
      min-width: 230px;
    }
  }
`;

export const TitleContainer = styled.div`
  padding: 0 59px;
  padding-right: 65px;
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
    gap: 30px;
    margin-bottom: 173px;
  }

  > h2 {
    font-size: 18px;
    line-height: 1.2;

    @media screen and (min-width: 768px) {
      font-size: 22px;
      line-height: 1.2;
    }
  }

  > p {
    font-size: 50px;

    @media screen and (min-width: 768px) {
      font-size: 85px;
      line-height: 0.88;
    }
  }
`;

export const ProgressBar = styled.div`
  backgound-color: #77ee7e;
  display: flex;
  margin: 0 auto;
  margin-bottom: 55px;
  padding: 0 47px;
  padding-left: 31px;
  @media screen and (min-width: 768px) {
    margin-bottom: 116px;
    padding: 0 117px;
    padding-left: 53px;
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
    box-shadow: 0 0 0 5px rgba(255, 255, 255, 0.2);

    @media screen and (min-width: 768px) {
      width: 48px;
      height: 48px;
      box-shadow: 0 0 0 8px rgba(255, 255, 255, 0.2);
    }
  }
`;

export const AmountGif = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  line-height: 1.3;
  font-weight: 600;
  letter-spacing: -0.02em;
  top: -56px;
  right: -41px;
  width: 84px;
  height: 42px;
  border-radius: 45px;
  background-color: #fff;

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
    content: 'Зібрано';
    position: absolute;
    bottom: -60px;
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
  padding-top: 13px;
  padding-right: 16px;
  padding-bottom: 28px;
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
    @media screen and (min-width: 768px) {

    }
  }
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(253, 253, 253, 0.4);
    border-radius: 8px;
}

  &::-webkit-scrollbar-thumb:hover {
    background-color: #555;
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

  > h4 {
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

  > p {
    font-weight: 500;
    font-size: 8px;
    line-height: 1.2;

    @media screen and (min-width: 768px) {
      font-size: 10px;
    }
  }
`;

export const MadeListItem = styled.li`
  position: relative;
  background: #ffffff1a;
  border-radius: 10px;
  border: 1px solid #ffffff14;
  padding: 10px;

  min-width: 140px;
  backdrop-filter: blur(5px);

  @media screen and (min-width: 768px) {
    padding: 20px;
    min-width: 243px;
    min-height: 176px;
  }

  > h4 {
    font-weight: 600;
    font-size: 10px;
    line-height: 1.2;
    margin-bottom: 2px;

    @media screen and (min-width: 768px) {
      font-size: 14px;
    }
  }

  > ul {
    padding-left: 15px;
    list-style-type: disc;
    display: flex;
    flex-direction: column;
    gap: 2px;

    li {
      font-size: 8px;
      line-height: 1.2;
      letter-spacing: -0.02em;

      @media screen and (min-width: 768px) {
        font-size: 10px;
      }
    }
  }
`;

export const SVGContainer = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  left: 50%;
  top: -14px;
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

  > svg {
    width: 12px;
    height: 12px;
  }
`;

export const SVGContainerForNeedItem = styled(SVGContainer)`
  background-color: #f77d07;
`;

export const StyledSwiper = styled(Swiper)`
  display: flex;
  gap: 8px;
  padding: 12px;

  > li {
    position: relative;
    background: #ffffff1a;
    border-radius: 10px;
    border: 1px solid #ffffff14;
    padding: 20px;
    width: 140px;
    h4 {
      font-weight: 600;
      font-size: 10px;
      line-height: 1.2;
      margin-bottom: 2px;
    }
  }
`;

export const StyledSwiperSlide = styled(SwiperSlide)`
  position: relative;
  background: #ffffff1a;
  border-radius: 10px;
  border: 1px solid #ffffff14;
  padding: 20px;
  > ul {
    display: flex;
    flex-direction: column;
    gap: 2px;
    li {
      font-size: 8px;
      list-style-type: disc;
      line-height: 1.2;
      letter-spacing: -0.02em;
    }
  }
`;
