import styled from 'styled-components';
import Modal from 'react-modal';

export const JoinModalStyled = styled(Modal)`
  min-width: 320px;
  width: 100%;
  height: 812px;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 23px 16px 20px 16px;

  box-shadow:
    0px 6px 10px rgba(123, 107, 88, 0.95),
    -8px 6px 16px rgba(199, 190, 185, 0.95),
    8px 6px 16px rgba(199, 190, 185, 0.95);

  font-family: 'MacPaw Fixel Display', sans-serif;
  font-size: 14px;
  line-height: 1.3;
  letter-spacing: -0.02em;
  font-weight: 500;
  color: rgba(11, 11, 11, 0.5);
  overflow-y: auto;
  max-height: 99vh;

  @media only screen and (min-width: 375px) and (max-width: 812px) {
    width: 375px;
  }

  @media only screen and (min-width: 768px) {
    width: 768px;
    height: 1024px;
    font-size: 16px;
    line-height: 1.5;
    padding: 32px;
  }

  @media only screen and (min-width: 1024px) {
    width: 100%;
    min-width: 1024px;
    max-width: 1440px;
    height: 880px;
    padding: 40px 80px;
  }

  /* body.modal-open {
    overflow: hidden;
  } */

  .joinCloseBtn {
    display: flex;
    justify-content: center;
    align-items: center;
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

    @media only screen and (min-width: 1024px) {
      top: 40px;
      right: 80px;
    }

    & svg {
      margin: 8px;
      width: 14px;
      height: 14px;
      fill: rgba(11, 11, 11, 0.5);
    }
  }

  .joinCloseText {
    display: none;

    @media only screen and (min-width: 768px) {
      display: block;
    }
  }

  .joinCloseBtn:hover .joinCloseText {
    color: #0b0b0b;
  }

  .joinCloseBtn:hover svg {
    fill: #0b0b0b;
  }

  .joinMainContainer {
    display: flex;
    justify-content: space-between;
    gap: 90px;
  }

  .joinForm {
    padding: 49px 0 46px 0;
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media only screen and (min-width: 768px) {
      padding: 140px 31px;
      gap: 30px;
    }

    @media only screen and (min-width: 1024px) {
      padding: 60px 0;
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
    flex-wrap: wrap;
    gap: 14px;

    @media only screen and (min-width: 768px) {
      width: 642px;
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
    width: 100%;
    min-width: 302px;
    height: 44px;
    outline-color: #f77d07;

    @media only screen and (min-width: 375px) {
      width: 343px;
    }

    @media only screen and (min-width: 768px) {
      padding: 15px;
      font-size: 16px;
      width: 314px;
    }
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

    @media only screen and (min-width: 768px) {
      padding: 15px 40px;
      width: 170px;
      height: 54px;
      font-size: 16px;
    }
  }

  .joinSubmitBtn:hover,
  .joinSubmitBtn:focus-visible,
  .joinSuccessBtn:hover,
  .joinSuccessBtn:focus-visible {
    background-color: #e97200;
  }

  .joinSubmitBtn:active,
  .joinSuccessBtn:active {
    color: #898b90;
    background-color: #e3e3e3;
  }

  .hidden {
    display: none;
  }

  .error {
    color: red;
    font-size: 14px;
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
  position: relative;
  bottom: 0;
  /* bottom: 20px; */

  @media only screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
    /* bottom: 32px; */
  }

  @media only screen and (min-width: 768px) {
    /* bottom: 40px; */
  }

  .joinProtectionBlock {
    display: flex;
    align-items: flex-start;
    gap: 8px;
    flex-direction: row;
    flex-wrap: wrap;

    @media only screen and (min-width: 768px) {
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 10px;
      position: fixed;
      right: 32px;
    }

    @media only screen and (min-width: 1024px) {
      right: 80px;
    }
  }

  .joinProtection {
    position: relative;
  }

  .joinProtection::after {
    content: '';
    position: absolute;
    top: 50%;
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
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border: none;
    color: rgba(11, 11, 11, 0.5);
    padding: 0;

    @media only screen and (min-width: 768px) {
      margin-left: 10px;
    }

    & svg {
      margin-left: 8px;
      width: 59px;
      height: 18px;

      @media only screen and (min-width: 768px) {
        margin-left: 10px;
        width: 100px;
        height: 30px;
      }
    }
  }
`;

export const ErrorStyledBlock = styled.div`
  padding-top: 199px;
  padding-bottom: 220px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media only screen and (min-width: 768px) {
    padding: 204px 31px 320px 31px;
    gap: 30px;
  }

  @media only screen and (min-width: 1024px) {
    padding: 176px 0 194px 0;
    margin: auto;
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

  .joinItemContact:hover,
  .joinItemContact:focus-visible {
    color: #f77d07;
  }
`;

export const PostedStyledBlock = styled.div`
  padding-top: 199px;
  padding-bottom: 252px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media only screen and (min-width: 768px) {
    padding: 244px 31px 290px 31px;
    gap: 30px;
  }

  @media only screen and (min-width: 1024px) {
    padding: 178px 0 203px 0;
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
    width: 122px;
    height: 44px;
    background-color: #f77d07;
    border: none;
    color: #fff;
    font-size: 14px;

    @media only screen and (min-width: 768px) {
      margin-top: 30px;
      padding: 15px 40px;
      width: 170px;
      height: 54px;
      font-size: 16px;
    }

    & :hover {
      color: #e97200;
    }
  }
`;
