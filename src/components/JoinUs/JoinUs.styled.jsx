import styled from 'styled-components';
import { StyledContainer } from '../../shared/Container/Container.styled';

import blobImageMobileJpg from 'src/assets/JoinUs/images/jpg/blob-image-mobile.jpg';
import blobImageMobileWebp from 'src/assets/JoinUs/images/webp/blob-image-mobile.webp';
import blobImageMobile2xJpg from 'src/assets/JoinUs/images/jpg/blob-image-mobile@2x.jpg';
import blobImageMobile2xWebp from 'src/assets/JoinUs/images/webp/blob-image-mobile@2x.webp';

import blobImageTabletJpg from 'src/assets/JoinUs/images/jpg/blob-image-tablet.jpg';
import blobImageTabletWebp from 'src/assets/JoinUs/images/webp/blob-image-tablet.webp';
import blobImageTablet2xJpg from 'src/assets/JoinUs/images/jpg/blob-image-tablet@2x.jpg';
import blobImageTablet2xWebp from 'src/assets/JoinUs/images/webp/blob-image-tablet@2x.webp';

import blobImageDesktopJpg from 'src/assets/JoinUs/images/jpg/blob-image-dekstop.jpg';
import blobImageDesktopWebp from 'src/assets/JoinUs/images/webp/blob-image-dekstop.webp';
import blobImageDesktop2xJpg from 'src/assets/JoinUs/images/jpg/blob-image-dekstop@2x.jpg';
import blobImageDesktop2xWebp from 'src/assets/JoinUs/images/webp/blob-image-dekstop@2x.webp';

export const JoinUsSection = styled.section`
  letter-spacing: -0.02em;
  color: #ffffff;

  background-image: url(${blobImageMobileJpg});
  background-image: -webkit-image-set(url(${blobImageMobileWebp}));

  @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
    background-image: url(${blobImageMobile2xJpg});
    background-image: -webkit-image-set(url(${blobImageMobile2xWebp}));
  }
  background-position: 36% center;
  background-size: auto 100%;
  background-repeat: no-repeat;
  @media screen and (min-width: 375px) {
    background-position: 38% center;
  }
  @media screen and (min-width: 768px) {
    background-image: url(${blobImageTabletJpg});
    background-image: -webkit-image-set(url(${blobImageTabletWebp}));
    background-position: 33% center;
    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
      background-image: url(${blobImageTablet2xJpg});
      background-image: -webkit-image-set(url(${blobImageTablet2xWebp}));
    }
  }
  @media screen and (min-width: 1440px) {
    background-image: url(${blobImageDesktopJpg});
    background-image: -webkit-image-set(url(${blobImageDesktopWebp}));
    background-position: 36% center;
    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
      background-image: url(${blobImageDesktop2xJpg});
      background-image: -webkit-image-set(url(${blobImageDesktop2xWebp}));
    }
  }
`;

export const JoinUsContainer = styled(StyledContainer)`
  position: relative;
  height: 740px;
  max-width: 375px;
  padding-top: 130px;
  overflow: hidden;

  @media screen and (min-width: 466px) {
    overflow: unset;
  }

  @media screen and (min-width: 768px) {
    padding-top: 217px;
    overflow: hidden;
    height: 1152px;
    max-width: 768px;
  }
  @media screen and (min-width: 906px) {
    overflow: unset;
  }
  @media screen and (min-width: 1440px) {
    padding-top: 302px;
    overflow: hidden;
    height: 1111px;
    max-width: 1440px;
  }
  @media screen and (min-width: 1680px) {
    overflow: unset;
  }
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 24px;
  line-height: 133%;
  color: #ffffff;

  @media screen and (min-width: 768px) {
    font-size: 45px;
    line-height: 111%;
    max-width: 600px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 60px;
    line-height: 113%;
    max-width: 720px;
  }
`;

export const Description = styled.p`
  margin-top: 14px;
  font-weight: 500;
  font-size: 14px;
  line-height: 129%;

  @media screen and (min-width: 768px) {
    margin-top: 24px;
    font-size: 18px;
    line-height: 133%;
    max-width: 450px;
  }
  @media screen and (min-width: 1440px) {
    margin-top: 28px;
    font-size: 20px;
    line-height: 130%;
    max-width: 580px;
  }
`;

export const StatsContainer = styled.div`
  margin-top: 24px;
  @media screen and (min-width: 1440px) {
    margin-top: 28px;
  }
`;

export const StatsTitle = styled.h3`
  font-weight: 500;
  font-size: 16px;
  line-height: 125%;
  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 133%;
  }
  @media screen and (min-width: 1440px) {
    font-size: 28px;
    line-height: 121%;
  }
`;

export const StatsList = styled.ul`
  margin-top: 10px;
  display: flex;
  gap: 10px;
  font-weight: 600;
  font-size: 12px;
  line-height: 133%;
  @media screen and (min-width: 768px) {
    margin-top: 24px;
    font-size: 16px;
    line-height: 150%;
  }
`;

export const StatsListItem = styled.li`
  padding: 10px 12px;
  border-radius: 30px;
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.18);
  @media screen and (min-width: 768px) {
    padding: 15px 26px;
  }
`;

export const JoinButton = styled.button`
  margin-top: 24px;
  padding: 15px 20px;

  font-weight: 600;
  font-size: 14px;
  line-height: 129%;
  border-radius: 30px;
  color: #0b0b0b;
  background: #ffffff;
  border: none;
  transition: 0.25s ease-in-out;
  &:hover {
    color: #f77d07;
  }
  &:active {
    background: #e3e3e3;
    color: #898b90;
  }

  @media screen and (min-width: 768px) {
    margin-top: 48px;
    padding: 23px 46px;
    font-size: 18px;
    line-height: 133%;
    border-radius: 60px;
  }
  @media screen and (min-width: 1440px) {
    margin-top: 44px;
  }
`;

export const AlreadyJoined = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 133%;
  span {
    font-weight: 600;
    font-size: 14px;
    line-height: 129%;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1px;
  width: fit-content;

  position: absolute;
  top: 561px;
  left: 82px;
  @media screen and (min-width: 375px) {
    left: 111px;
  }
  @media screen and (min-width: 768px) {
    top: 864px;
    left: 316px;
    font-size: 18px;
    line-height: 133%;
    span {
      font-size: 22px;
      line-height: 118%;
    }
  }
  @media screen and (min-width: 1440px) {
    top: 730px;
    left: 1000px;
    font-size: 20px;
    line-height: 130%;
    span {
      font-size: 28px;
      line-height: 121%;
    }
  }
`;
