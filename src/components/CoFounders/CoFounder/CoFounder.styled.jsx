import styled from 'styled-components';

export const ListItem = styled.div`
  width: 159px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 374px) {
    width: 152px;
  }
  @media screen and (min-width: 768px) {
    width: 234px;
  }
`;

export const PersonName = styled.h3`
  font-family: 'Oddval';
  font-weight: 600;
  font-size: 18px;
  line-height: 122%;
  letter-spacing: -0.02em;
  color: #0b0b0b;
  text-align: center;
  margin-top: 16px;
  @media screen and (max-width: 374px) {
    width: 100px;
  }
  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 130%;
    margin-top: 30px;
  }
`;

export const PersonDescription = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 133%;
  letter-spacing: -0.02em;
  text-align: center;
  margin-top: 8px;
  color: rgba(11, 11, 11, 0.5);
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 150%;
  }
`;

export const PersonImageContainer = styled.div`
  position: relative;
`;

export const PersonImage = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  @media screen and (min-width: 768px) {
    width: 180px;
    height: 180px;
  }
`;

export const SocialNetworkLink = styled.a`
  background-color: #f77d07;
  width: 30px;
  height: 30px;
  border-radius: 100px;
  padding: 8px;
  position: absolute;
  left: 50%;
  bottom: -8px;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  &:active {
    background: #e97200;
  }
  .socialNetworkIcon {
    width: 14px;
    height: 14px;
  }
  @media screen and (min-width: 768px) {
    .socialNetworkIcon {
      width: 16px;
      height: 16px;
    }
    padding: 10px;
    width: 36px;
    height: 36px;
    bottom: -16px;
  }
  @media screen and (min-width: 1440px) {
    &:hover {
      background: #e97200;
    }
  }
`;
