import styled from 'styled-components';
import Modal from 'react-modal';

export const JoinModalStyled = styled(Modal)`
  min-width: 320px;
  width: 100%;
  height: 100%;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 23px 16px 20px 16px;
  box-shadow:
    0px 6px 10px rgba(123, 107, 88, 0.95),
    -8px 6px 16px rgba(199, 190, 185, 0.95),
    8px 6px 16px rgba(199, 190, 185, 0.95);

  font-size: 14px;
  line-height: 1.3;
  letter-spacing: -0.02em;
  font-weight: 500;
  color: rgba(11, 11, 11, 0.5);
  overflow-y: auto;

  @media only screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
    padding: 32px;
  }

  @media only screen and (min-width: 1440px) {
    padding: 40px 80px;
  }

  .joinCloseBtn {
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 0.5;
    height: 28px;
    padding: 0px;
    position: absolute;
    top: 18px;
    right: 16px;
    background-color: transparent;
    border: none;
    color: rgba(11, 11, 11, 0.5);

    @media only screen and (min-width: 768px) {
      top: 32px;
      right: 32px;
    }

    @media only screen and (min-width: 1440px) {
      top: 40px;
      right: 80px;
    }

    & svg {
      margin: 8px;
      width: 14px;
      height: 14px;
      fill: rgba(11, 11, 11, 0.5);
      margin-top: 6px;
    }
  }

  .joinCloseText {
    display: none;

    @media only screen and (min-width: 768px) {
      display: block;
    }
  }

  .joinCloseBtn:active .joinCloseText {
    color: #0b0b0b;
  }

  .joinCloseBtn:active svg {
    fill: #0b0b0b;
  }

  @media only screen and (min-width: 1440px) {
    .joinCloseBtn:hover .joinCloseText {
      color: #0b0b0b;
    }

    .joinCloseBtn:hover svg {
      fill: #0b0b0b;
    }

    .joinInput:hover {
      border: 2px solid #f77d07;
    }

    .joinSubmitBtn:hover,
    .joinSuccessBtn:hover {
      background-color: #e97200;
    }
  }

  .joinMainContainer {
    display: flex;
    justify-content: center;
    gap: 90px;
    margin: 0 auto;

    @media only screen and (min-width: 1440px) {
      padding: 0;
    }
  }

  .joinForm {
    padding: 40px 0;
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media only screen and (min-width: 768px) {
      padding: 86px 0;
      gap: 30px;
    }

    @media only screen and (min-width: 1440px) {
      padding: 60px 0 66px 0;
      margin: auto;
    }
  }

  .joinTitle {
    font-family: 'Oddval', sans-serif;
    font-weight: 600;
    font-size: 24px;
    color: #0b0b0b;

    @media only screen and (min-width: 768px) {
      font-size: 44px;
    }
  }

  .joinTitleAccent {
    color: #f77d07;
  }

  .joinList {
    display: flex;
    flex-direction: column;
    gap: 14px;

    @media only screen and (min-width: 768px) {
      width: 642px;
      flex-direction: row;
      flex-wrap: wrap;
    }
  }

  .joinFields {
    height: 82px;

    @media only screen and (min-width: 768px) {
      height: 108px;
    }

    @media only screen and (min-width: 1440px) {
      height: 108px;
    }
  }

  .joinFields:last-child {
    height: 148px;

    @media only screen and (min-width: 768px) {
      height: 230px;
    }

    @media only screen and (min-width: 1440px) {
      height: 230px;
    }
  }

  .joinLabel {
    display: flex;
    flex-direction: column;
    gap: 8px;

    & > textarea {
      height: 110px;

      @media only screen and (min-width: 768px) {
        height: 186px;
        width: 642px;
      }
    }
  }

  .joinInput {
    font-size: 14px;
    border: 1px solid rgba(11, 11, 11, 0.15);
    border-radius: 16px;
    padding: 14px;
    padding-bottom: 10px;
    width: 100%;
    min-width: 302px;
    height: 44px;
    outline-color: #f77d07;

    @media only screen and (min-width: 375px) {
      width: 343px;
    }

    @media only screen and (min-width: 768px) {
      padding: 15px;
      padding-bottom: 12px;
      font-size: 16px;
      width: 314px;
    }
  }

  .joinInput:active,
  .joinInput:focus,
  .joinInput:focus-visible {
    border: 2px solid #f77d07;
  }

  ::placeholder {
    color: rgba(11, 11, 11, 0.5);
    font-size: 14px;

    @media only screen and (min-width: 768px) {
      font-size: 16px;
    }
  }

  .joinSubmitBtn {
    border-radius: 30px;
    padding: 13px 20px;
    width: 122px;
    height: 44px;
    background-color: #f77d07;
    border: none;
    color: #fff;
    font-size: 14px;
    font-weight: 600;
    line-height: 1;

    @media only screen and (min-width: 768px) {
      padding: 15px 40px;
      width: 174px;
      height: 54px;
      font-size: 16px;
    }
  }

  .joinSubmitBtn:focus-visible,
  .joinSuccessBtn:focus-visible,
  .joinSubmitBtn:active,
  .joinSuccessBtn:active {
    background-color: #e97200;
  }

  @media only screen and (min-width: 1440px) {
    .joinSubmitBtn:active,
    .joinSuccessBtn:active {
      color: #898b90;
      background-color: #e3e3e3;
    }
  }

  .hidden {
    display: none;
  }

  .error {
    color: red;
    font-size: 14px;

    @media only screen and (min-width: 768px) {
      font-size: 16px;
    }
  }

  .errorInput {
    border: 2px solid red;
  }
`;

export const MaskaStyled = styled.div`
  margin-top: 56px;
  width: 548px;
  height: 600px;

  .joinImg {
    width: 548px;
    height: 600px;
  }
`;

export const InfoStyled = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 8px;

  .joinProtectionBlock {
    display: flex;
    align-items: center;
    gap: 8px;

    @media only screen and (min-width: 768px) {
      justify-content: space-between;
    }
  }

  .joinProtectionBig {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .joinProtection {
    position: relative;
  }

  .joinProtection::after {
    content: '';
    position: absolute;
    top: 35%;
    right: -8px;
    transform: translateY(-50%);
    display: block;
    width: 1px;
    height: 14px;
    background-color: rgba(11, 11, 11, 0.5);

    @media only screen and (min-width: 768px) {
      right: -10px;
    }
  }

  .developers {
    font-size: 14px;
    display: flex;
    align-items: center;
    line-height: 1;
    background-color: transparent;
    border: none;
    color: rgba(11, 11, 11, 0.5);
    padding: 0;

    @media only screen and (min-width: 768px) {
      font-size: 16px;
      margin-left: 10px;
    }

    & svg {
      margin-left: 8px;
      width: 59px;
      height: 18px;
      fill: #f77d07;

      @media only screen and (min-width: 768px) {
        margin-left: 10px;
        width: 100px;
        height: 30px;
      }
    }
  }

  .developers:active {
    color: #0b0b0b;
  }

  .developers:active svg {
    fill: #0b0b0b;
  }

  @media only screen and (min-width: 1440px) {
    .developers:hover {
      color: #0b0b0b;
    }

    .developers:hover svg {
      fill: #0b0b0b;
    }
  }
`;

export const ErrorStyledBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;

  @media only screen and (min-width: 768px) {
    gap: 30px;
  }

  @media only screen and (min-width: 1440px) {
    padding: 164px 0 174px 0;
  }

  & svg {
    width: 16px;
    height: 16px;
    fill: red;

    @media only screen and (min-width: 768px) {
      width: 20px;
      height: 20px;
    }
  }

  .joinContacts {
    display: flex;
    flex-direction: column;
    gap: 20px;
    border: 1px solid rgba(11, 11, 11, 0.2);
    border-radius: 16px;
    padding: 20px;
    width: 244px;
    height: 152px;
    color: #0b0b0b;

    @media only screen and (min-width: 768px) {
      gap: 24px;
      padding: 24px;
      width: 293px;
      height: 196px;
    }
  }

  .joinItemContact {
    font-size: 20px;
    color: #0b0b0b;

    @media only screen and (min-width: 768px) {
      font-size: 24px;
      margin-top: 6px;
    }
  }

  .joinItemContact:focus-visible,
  .joinItemContact:active {
    color: #f77d07;
  }

  @media only screen and (min-width: 1440px) {
    .joinItemContact:hover {
      color: #f77d07;
    }
  }
`;

export const PostedStyledBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media only screen and (min-width: 768px) {
    gap: 30px;
  }

  @media only screen and (min-width: 1440px) {
    padding: 178px 0 170px 0;
  }

  .joinText {
    color: rgba(11, 11, 11, 0.8);
    font-size: 16px;

    @media only screen and (min-width: 768px) {
      font-size: 20px;
    }
  }

  .joinSuccessBtn {
    margin-top: 20px;
    border-radius: 30px;
    padding: 13px 20px;
    width: 130px;
    height: 44px;
    background-color: #f77d07;
    border: none;
    color: #fff;
    font-size: 14px;
    font-weight: 600;
    line-height: 1;

    @media only screen and (min-width: 768px) {
      margin-top: 30px;
      padding: 15px 40px;
      width: 180px;
      height: 54px;
      font-size: 16px;
    }
  }
`;
