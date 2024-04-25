import styled from '@emotion/styled';
import bgImage from '../../assets/about/howItWorkBg.svg';

export const HowItWorkSection = styled.section`
  margin: 30px 0;
  width: 100%;
  font-family: 'FixelDisplay';
  padding: 104px 0 82px;
  background-image: url(${bgImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: auto 100%;

  .container {
    min-width: 320px;
    max-width: 375px;
    padding: 0 16px;
    margin: 0 auto;
  }


  .how-it-work-title {
    font-family: Oddval;
    font-size: 24px;
    font-weight: 600;
    line-height: 1.33;
    letter-spacing: -0.02em;
    text-align: left;
    color: #ffffff;
    margin-bottom: 32px;
  }

  .accent {
    color: #f77d07;
  }

  .how-it-work-btn {
    display: block;
    padding: 15px 20px;
    border-radius: 30px;
    opacity: 0px;
    background: #ffffff;
    border: none;
    outline: none;
    margin: 0 auto;

    font-family: MacPaw Fixel Display;
    font-size: 14px;
    font-weight: 600;
    line-height: 1.29;
    letter-spacing: -0.02em;
    text-align: center;
    color: #0b0b0b;

    &:hover {
      background: #e3e3e3;
      color: #898b90;
    }
  }

  .swiper {
    width: 100%;
    height: 100%;
    padding-bottom: 60px;
  }

  .how-it-work-list {
    display: flex;
    justify-content: space-between;
    margin-bottom: 35px;
  }

  .how-it-work-item {
    background: #ffffff;
    padding: 32px;
    border-radius: 20px;
  }
  .swiper-slide{
    height: unset;
  }

  .how-it-work-number {
    width: 44px;
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    opacity: 0px;
    background: #f77d07;
    box-shadow: 0px 1px 4px 0px #1018280f;
    margin-bottom: 16px;

    font-size: 24px;
    font-weight: 500;
    line-height: 1.33;
    letter-spacing: -0.02em;
    color: #ffffff;
  }

  .how-it-work-text {
    font-family: Oddval;
    font-size: 18px;
    font-weight: 600;
    line-height: 1.11;
    letter-spacing: -0.02em;
    text-align: left;
    color: #0b0b0b;
  }

  .swiper-pagination {
    bottom: 40px;
  }

  .swiper-pagination-bullet {
    background: #FFFFFFa6;
  }

  .swiper-pagination-bullet-active {
    background: #ffffff;
  }


  @media (min-width: 768px) {
    padding: 60px 0;

    .container {
      width: 768px;
      min-width: unset;
      max-width: unset;
      padding: 0 32px;
    }
  }

  @media (min-width: 1440px) {
    padding: 60px 0;
    margin-bottom: 150px;
    padding: 258px 120px 207px;
    background-image: url(${bgImage});
    background-repeat: no-repeat;
    background-position: center;
    background-size: auto 100%;

    .container {
      width: 1440px;
      padding: 0 120px;
    }

    .how-it-work-title {
      font-family: Oddval;
      font-size: 60px;
      font-weight: 600;
      line-height: 1.13;
      letter-spacing: -0.02em;
      text-align: left;
      color: #ffffff;
      margin-bottom: 80px;
    }

    .accent {
      color: #f77d07;
    }

    .how-it-work-btn {
      display: block;
      padding: 23px 46px;
      border-radius: 60px;
      opacity: 0px;
      background: #ffffff;
      border: none;
      outline: none;
      margin: 0 auto;

      font-family: MacPaw Fixel Display;
      font-size: 18px;
      font-weight: 600;
      line-height: 1.33;
      letter-spacing: -0.02em;
      text-align: center;
      color: #0b0b0b;

      &:hover {
        background: #e3e3e3;
        color: #898b90;
      }
    }

    .how-it-work-list {
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;
      gap: 24px;
      margin-bottom: 80px;
    }

    .how-it-work-item {
      background: #ffffff;
      padding: 40px;
      border-radius: 20px;
      width: calc((100% - 48px) / 3);

      &:first-of-type {
        width: calc(47% - 24px);
      }
      &:nth-of-type(2) {
        width: 53%;
      }
    }

    .how-it-work-number {
      width: 72px;
      height: 72px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 100%;
      opacity: 0px;
      background: #f77d07;
      box-shadow: 0px 1px 4px 0px #1018280f;
      margin-bottom: 30px;

      font-size: 40px;
      font-weight: 500;
      line-height: 1.1;
      letter-spacing: -0.02em;
      color: #ffffff;
    }

    .how-it-work-text {
      font-family: Oddval;
      font-size: 22px;
      font-weight: 600;
      line-height: 1.18;
      letter-spacing: -0.02em;
      text-align: left;
      color: #0b0b0b;
    }
  }
`;
