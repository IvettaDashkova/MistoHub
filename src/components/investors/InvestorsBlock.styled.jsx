import styled from 'styled-components';

export const TextWrapper = styled.div`
  max-width: 375px;
  margin-bottom: 32px;
  padding: 0 16px;

  @media screen and (min-width: 768px) and (max-width: 1439.9px) {
    max-width: 768px;
    margin-bottom: 60px;
    padding-left: 32px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1024px;
    margin-bottom: 80px;
    padding-left: 120px;
  }
`;

export const InfoText = styled.p`
  color: rgba(11, 11, 11, 0.5);
  font-size: 14px;
  line-height: 18px; /* 128.571% */
  letter-spacing: -0.28px;

  @media screen and (min-width: 768px) and (max-width: 1439.9px) {
    font-size: 16px;
    line-height: 24px; /* 150% */
    letter-spacing: -0.32px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 16px;
    line-height: 24px; /* 150% */
    letter-spacing: -0.32px;
  }
`;

export const MainHeading = styled.h2`
  color: #0b0b0b;
  font-family: Oddval;
  font-size: 24px;
  font-weight: 600;
  line-height: 32px; /* 133.333% */
  letter-spacing: -0.48px;

  @media screen and (min-width: 768px) and (max-width: 1439.9px) {
    font-size: 45px;
    line-height: 50px; /* 111.111% */
    letter-spacing: -0.9px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 60px;
    font-weight: 600;
    line-height: 68px; /* 113.333% */
    letter-spacing: -1.2px;
  }
`;

export const SecondHeading = styled.p`
  color: rgba(11, 11, 11, 0.8);
  font-family: 'MacPaw Fixel Display';
  font-size: 16px;
  line-height: 20px; /* 125% */
  letter-spacing: -0.32px;

  @media screen and (min-width: 768px) and (max-width: 1439.9px) {
    color: rgba(11, 11, 11, 0.8);
    font-family: 'MacPaw Fixel Display';
    font-size: 24px;
    line-height: 32px; /* 133.333% */
    letter-spacing: -0.48px;
  }

  @media screen and (min-width: 1440px) {
    color: rgba(11, 11, 11, 0.8);
    font-family: 'MacPaw Fixel Display';
    font-size: 28px;
    line-height: 34px; /* 121.429% */
    letter-spacing: -0.56px;
  }
`;
