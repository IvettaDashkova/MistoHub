import styled from '@emotion/styled';

export const AboutSection = styled.section`
  width: 1440px;
  margin: 0 auto;
  margin-bottom: 190px;
  padding: 0 120px;

  @media(max-width: 768px) {
    width: 768px;
    padding: 0 32px;
  }
  @media(max-width: 375px) {
    max-width: 375px;
    padding: 0 16px;
  }

  .swiper {
    width: 100%;
    height: 100%;
  }
  
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    height: 300px;
  
    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .swiper-pagination-bullet{

  }

  .swiper-pagination-bullet-active{
    background: #f77d07;
  }
`;

export const AboutProject = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.02em;
  text-align: left;
  color: #0b0b0b80;
  margin-bottom: 30px;
`;

export const Mistohub = styled.span`
  color: #f77d07;
  text-transform: uppercase;
`;

export const AboutTitle = styled.h2`
  font-weight: 600;
  font-size: 60px;
  line-height: 1.13;
  letter-spacing: -0.02em;
  color: #0b0b0b;
  padding-bottom: 80px;
`;

export const AboutList = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 190px;

  @media(max-width: 768px) {
    flex-direction: column;
  }
`;

export const AboutItem = styled.li`
  background: #f8f8f8;
  padding: 38px;
  border-radius: 20px;
`;

export const AboutNumber = styled.div`
  width: 72px;
  height: 72px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  opacity: 0px;
  background: #0b0b0b;
  box-shadow: 0px 1px 4px 0px #1018280f;
  margin-bottom: 40px;

  font-size: 40px;
  font-weight: 500;
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: #ffffff;
`;

export const AboutItemTitle = styled.h3`
  font-family: Oddval;
  font-size: 28px;
  font-weight: 600;
  line-height: 1.14;
  letter-spacing: -0.02em;
  text-align: left;
  color: #0b0b0b;
  margin-bottom: 20px;
`;

export const AboutItemText = styled.p`
  font-family: MacPaw Fixel Display;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.3;
  letter-spacing: -0.02em;
  text-align: left;
  color: #0b0b0bcc;
`;

export const AboutInfo = styled.div`
  font-weight: 600;
  font-size: 60px;
  line-height: 1.13;
  letter-spacing: -0.02em;
  color: #0b0b0b;
  text-align: center;
  padding: 0 100px 80px;
`;
