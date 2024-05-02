import styled from 'styled-components';
import ReactModal from 'react-modal';

export const ModalCompanyWrapper = styled.div`
  .text {
    color: rgba(11, 11, 11, 0.5);
    font-size: 12px;
    line-height: 16px; /* 133.333% */
    letter-spacing: -0.24px;
  }

  .textQuestion {
    color: #0b0b0b;
    font-family: Oddval;
    font-size: 18px;
    font-weight: 600;
    line-height: 20px; /* 111.111% */
    letter-spacing: -0.36px;
    margin-top: 28px;
  }

  .companyName {
    color: #0b0b0b;
    font-family: Oddval;
    font-size: 16px;
    font-weight: 600;
    line-height: 20px; /* 125% */
    letter-spacing: -0.32px;
  }

  .textAnswer {
    color: #0b0b0b;
    font-size: 14px;
    line-height: 18px; /* 128.571% */
    letter-spacing: -0.28px;
    min-width: 303px;
    position: relative;
    z-index: 1;
    padding-right: 20px;
  }

  .contentWrapper {
    padding: 0 0 20px 20px;
    position: relative;
    background-image: url('/src/assets/investors/illustration_modal_mob.svg');
    background-repeat: no-repeat;
    background-size: 207px 143px;
    background-position: bottom right;
    border-radius: 10px;
  }

  .main-heading-wrapper {
    display: flex;
    flex-direction: column;
    padding-top: 28px;
    height: fit-content;
    gap: 4px;
    width: fit-content;
  }

  .closeWrapper {
    display: flex;
    justify-content: flex-end;
    width: fit-content;
    height: fit-content;
    order: 1;
    margin-left: auto;
    padding-top: 10px;
    padding-right: 10px;
  }
  .closeButton {
    float: right;
    border: none;
    border-radius: 10px;
    background: #fff;
    box-shadow:
      4px 17px 102.1px 0px rgba(0, 0, 0, 0.19),
      0px 25px 30.4px 0px rgba(0, 0, 0, 0.09);
    padding: 0;
  }

  .close-icon {
    stroke: rgba(11, 11, 11, 0.5);
  }

  .instaIcon {
    width: 14px;
    height: 14px;
    fill: white;
  }
  .svgWrapper {
    background: #f77d07;
    width: 30px;
    height: 30px;
    border-radius: 100px;
    display: inline-flex;
    padding: 8px;
    align-items: center;
    gap: 10px;
    position: absolute;
    top: 82px;
    left: 41px;
  }

  a {
    padding: 0;
  }

  .svgBackground {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 189px;
    height: 115px;
  }

  .closeWord {
    display: none;
  }

  .top-wrapper {
    display: flex;
    gap: 10px;
  }

  .title-wrapper {
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding-top: 28px;
  }

  .main-image {
    width: 70px;
    height: 70px;
  }

  @media screen and (min-width: 768px) and (max-width: 1439.9px) {
    .text {
      font-size: 14px;
      line-height: 18px; /* 128.571% */
      letter-spacing: -0.28px;
    }

    .textQuestion {
      font-size: 20px;
      font-weight: 600;
      line-height: 26px; /* 130% */
      margin-top: 32px;
    }

    .companyName {
      font-size: 20px;
      font-weight: 600;
      line-height: 26px; /* 130% */
    }

    .textAnswer {
      font-size: 16px;
      line-height: 24px; /* 150% */
      letter-spacing: -0.32px;
      max-width: 516px;
      position: relative;
      z-index: 1;
    }

    .contentWrapper {
      padding: 0 0 30px 30px;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='373' height='184' viewBox='0 0 373 184' fill='none'%3E%3Cpath d='M339.305 3.92172C323.991 12.3595 318.501 31.7173 327.066 47.076C335.631 62.4347 378.89 74.906 378.89 74.906C378.89 74.906 391.174 31.8313 382.609 16.4726C374.044 1.11389 354.62 -4.51608 339.305 3.92172Z' fill='%23FFF6F1'/%3E%3Cpath d='M65.3343 150.247H27.4817C24.4862 150.247 21.6722 151.881 20.1291 154.515L1.15736 187.298C-0.385788 189.931 -0.385788 193.11 1.15736 195.743L20.1291 228.526C21.6722 231.16 24.3954 232.794 27.4817 232.794H65.3343C68.3299 232.794 71.1438 231.16 72.687 228.526L91.6587 195.743C93.2019 193.11 93.2019 189.931 91.6587 187.298L72.687 154.515C71.1438 151.79 68.3299 150.247 65.3343 150.247Z' fill='%23FFF6F1'/%3E%3Cpath d='M106.877 153.04L152.512 88.7681L73.2585 81.8759L106.877 153.04Z' fill='%23FFF6F1'/%3E%3Cpath d='M383.765 64.4387C308.743 43.4582 313.801 150.438 313.801 150.438C313.801 150.438 289.248 24.3625 211.486 58.2541C133.502 92.2092 209.193 170.681 209.193 170.681C209.193 170.681 113.897 104.499 85.3086 165.063C56.72 225.628 193.412 304.902 296.424 275.781C415.033 242.213 434.427 78.7199 383.765 64.4387Z' fill='%23FFF6F1'/%3E%3C/svg%3E");
      background-repeat: no-repeat;
      background-size: 410px 282px;
      background-position: bottom right;
      border-radius: 10px;
      position: relative;
    }

    .main-heading-wrapper {
      display: flex;
      flex-direction: column;
      padding-top: 30px;
      height: fit-content;
      gap: 4px;
    }

    .closeWrapper {
      display: flex;
      justify-content: flex-end;
      padding-top: 16px;
      padding-right: 16px;
      width: fit-content;
      height: fit-content;
      gap: 4px;
      order: 1;
      margin-left: auto;
    }

    .closeWord {
      color: rgba(11, 11, 11, 0.5);
      font-family: 'MacPaw Fixel Display';
      font-size: 16px;
      font-weight: 500;
      line-height: 24px; /* 150% */
      letter-spacing: -0.32px;
      background: #fff;
      border: none;
      width: 65px;
      hieght: 24px;
      padding: 0;
      display: block;
    }

    .closeButton {
      float: right;
      border: none;
      border-radius: 10px;
      background: #fff;
      box-shadow:
        4px 17px 102.1px 0px rgba(0, 0, 0, 0.19),
        0px 25px 30.4px 0px rgba(0, 0, 0, 0.09);
      padding: 0;
      position: relative;
      z-index: 1;
    }

    .closeSvg {
      width: 28px;
      height: 28px;
    }

    .close-icon {
      stroke: rgba(11, 11, 11, 0.5);
    }

    .svgWrapper {
      background: #f77d07;
      width: 40px;
      height: 40px;
      border-radius: 100px;
      display: inline-flex;
      padding: 8px;
      align-items: center;
      justify-content: center;
      gap: 10px;
      position: absolute;
      top: 109px;
      left: 61px;
    }

    .instaIcon {
      width: 16px;
      height: 16px;
      fill: white;
    }

    a {
      padding: 0;
    }

    .top-wrapper {
      display: flex;
      gap: 16px;
    }

    .title-wrapper {
      display: flex;
      flex-direction: column;
      gap: 4px;
      padding-top: 30px;
    }

    .main-image {
      width: 100px;
      height: 100px;
    }
  }

  @media screen and (min-width: 1440px) {
    .text {
      // color: rgba(11, 11, 11, 0.5);
      // font-family: 'MacPaw Fixel Display';
      font-size: 14px;
      line-height: 18px; /* 128.571% */
      letter-spacing: -0.28px;
    }

    .textQuestion {
      // color: #0b0b0b;
      // font-family: Oddval;
      font-size: 20px;
      font-weight: 600;
      line-height: 26px; /* 130% */
      margin-top: 32px;
    }

    .companyName {
      // color: #0b0b0b;
      // font-family: Oddval;
      font-size: 20px;
      font-weight: 600;
      line-height: 26px; /* 130% */
    }

    .textAnswer {
      // color: #0b0b0b;
      // font-family: 'MacPaw Fixel Display';
      font-size: 16px;
      line-height: 24px; /* 150% */
      letter-spacing: -0.32px;
      max-width: 516px;
      position: relative;
      z-index: 1;
    }

    .contentWrapper {
      padding: 0 0 30px 30px;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='373' height='184' viewBox='0 0 373 184' fill='none'%3E%3Cpath d='M339.305 3.92172C323.991 12.3595 318.501 31.7173 327.066 47.076C335.631 62.4347 378.89 74.906 378.89 74.906C378.89 74.906 391.174 31.8313 382.609 16.4726C374.044 1.11389 354.62 -4.51608 339.305 3.92172Z' fill='%23FFF6F1'/%3E%3Cpath d='M65.3343 150.247H27.4817C24.4862 150.247 21.6722 151.881 20.1291 154.515L1.15736 187.298C-0.385788 189.931 -0.385788 193.11 1.15736 195.743L20.1291 228.526C21.6722 231.16 24.3954 232.794 27.4817 232.794H65.3343C68.3299 232.794 71.1438 231.16 72.687 228.526L91.6587 195.743C93.2019 193.11 93.2019 189.931 91.6587 187.298L72.687 154.515C71.1438 151.79 68.3299 150.247 65.3343 150.247Z' fill='%23FFF6F1'/%3E%3Cpath d='M106.877 153.04L152.512 88.7681L73.2585 81.8759L106.877 153.04Z' fill='%23FFF6F1'/%3E%3Cpath d='M383.765 64.4387C308.743 43.4582 313.801 150.438 313.801 150.438C313.801 150.438 289.248 24.3625 211.486 58.2541C133.502 92.2092 209.193 170.681 209.193 170.681C209.193 170.681 113.897 104.499 85.3086 165.063C56.72 225.628 193.412 304.902 296.424 275.781C415.033 242.213 434.427 78.7199 383.765 64.4387Z' fill='%23FFF6F1'/%3E%3C/svg%3E");
      background-repeat: no-repeat;
      background-size: 410px 282px;
      background-position: bottom right;
      border-radius: 10px;
      position: relative;
    }

    .main-heading-wrapper {
      display: flex;
      flex-direction: column;
      padding-top: 30px;
      height: fit-content;
      gap: 4px;
    }

    .closeWrapper {
      display: flex;
      justify-content: flex-end;
      padding-top: 16px;
      padding-right: 16px;
      width: fit-content;
      height: fit-content;
      gap: 4px;
      order: 1;
      margin-left: auto;
    }

    .closeWord {
      color: rgba(11, 11, 11, 0.5);
      font-family: 'MacPaw Fixel Display';
      font-size: 16px;
      font-weight: 500;
      line-height: 24px; /* 150% */
      letter-spacing: -0.32px;
      background: #fff;
      border: none;
      width: 65px;
      hieght: 24px;
      padding: 0;
      display: block;
    }

    .closeButton {
      float: right;
      border: none;
      border-radius: 10px;
      background: #fff;
      box-shadow:
        4px 17px 102.1px 0px rgba(0, 0, 0, 0.19),
        0px 25px 30.4px 0px rgba(0, 0, 0, 0.09);
      padding: 0;
      position: relative;
      z-index: 1;
    }

    .closeSvg {
      width: 28px;
      height: 28px;
    }

    .close-icon {
      stroke: rgba(11, 11, 11, 0.5);
    }

    .svgWrapper {
      background: #f77d07;
      width: 40px;
      height: 40px;
      border-radius: 100px;
      display: inline-flex;
      padding: 8px;
      align-items: center;
      justify-content: center;
      gap: 10px;
      position: absolute;
      top: 109px;
      left: 61px;
    }

    .instaIcon {
      width: 16px;
      height: 16px;
      fill: white;
    }

    a {
      padding: 0;
    }

    .top-wrapper {
      display: flex;
      gap: 16px;
    }

    .title-wrapper {
      display: flex;
      flex-direction: column;
      gap: 4px;
      padding-top: 30px;
    }

    .main-image {
      width: 100px;
      height: 100px;
    }
  }
`;

export const CustomModal = styled(ReactModal)`
  &.ReactModal__Content {
    width: 100%;
    height: fit-content;
    margin: auto;
    border-radius: 10px;
    border: none;
    background: #fff;
    box-shadow:
      4px 17px 102.1px 0px rgba(0, 0, 0, 0.19),
      0px 25px 30.4px 0px rgba(0, 0, 0, 0.09);
    overflow: hidden;
    backgroundcolor: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    @media screen and (min-width: 375px) and (max-width: 767.9px) {
      width: 343px;
    }

    @media screen and (min-width: 768px) and (max-width: 1439.9px) {
      width: 576px;
    }

    @media screen and (min-width: 1440px) {
      width: 576px;
    }
  }
`;
