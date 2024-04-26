import styled from 'styled-components';
import Modal from 'react-modal';

export const JoinModalStyled = styled(Modal)`
  min-width: 320px;
  max-width: 375px;
  width: 100%;
  /* height: 812px; */
  height: 100%;
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

  @media only screen and (min-width: 768px) {
    max-width: 768px;
    /* height: 1024px; */
    height: 100%;
    font-size: 16px;
    line-height: 1.5;
  }

  @media only screen and (min-width: 1024px) {
    max-width: 1440px;
    /* height: 880px; */
    height: 100%;
  }

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

  .joinCloseBtn:hover .joinCloseSvg {
    fill: #0b0b0b;
  }

  .joinCloseSvg {
    margin: 8px;
    width: 14px;
    height: 14px;
    fill: rgba(11, 11, 11, 0.5);
  }

  .joinForm {
    margin-top: 49px;
    margin-bottom: 46px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .joinTitle {
    font-family: 'Oddval', sans-serif;
    font-weight: 600;
    font-size: 24px;
    color: #0b0b0b;
  }

  .joinTitleAccent {
    color: #f77d07;
  }

  .joinList {
    display: flex;
    flex-wrap: wrap;
    gap: 14px;
  }

  .joinLabel {
    display: flex;
    flex-direction: column;
    gap: 8px;

    & > textarea {
      height: 110px;
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
  }

  ::placeholder {
    color: rgba(11, 11, 11, 0.5);
    font-size: 14px;
  }

  .joinSubmitBtn {
    border-radius: 30px;
    padding: 13px 20px;
    width: 122px;
    height: 44px;
    background-color: #f77d07;
    border: none;
    color: #fff;
    /* font-weight: 600; */
  }

  .developers {
    background-color: transparent;
    border: none;
    color: rgba(11, 11, 11, 0.5);
    padding: 0;
  }

  .logoGoIT {
    margin-left: 8px;
    width: 59px;
    height: 18px;
  }

  .hidden {
    display: none;
  }
`;

/* .joinList li:last-of-type .joinInput {
    height: 110px;
  } */

// export const ModalJoinStyled = styled.div`
/* min-width: 320px;
  max-width: 375px;
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

  @media only screen and (min-width: 768px) {
    max-width: 768px;
    height: 1024px;
    font-size: 16px;
    line-height: 1.5;
  }

  @media only screen and (min-width: 1024px) {
    max-width: 1440px;
    height: 880px;
  } */

//   .joinCloseBtn {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     height: 28px;
//     padding: 0px;
//     position: absolute;
//     top: 18px;
//     right: 16px;
//     background-color: transparent;
//     border: none;
//     color: rgba(11, 11, 11, 0.5);
//   }

//   .joinCloseText {
//     display: none;

//     @media only screen and (min-width: 768px) {
//       display: block;
//     }
//   }

//   .joinCloseBtn:hover .joinCloseText {
//     color: #0b0b0b;
//   }

//   .joinCloseBtn:hover .joinCloseSvg {
//     fill: #0b0b0b;
//   }

//   .joinCloseSvg {
//     margin: 8px;
//     width: 14px;
//     height: 14px;
//     fill: rgba(11, 11, 11, 0.5);
//   }

//   .joinForm {
//     margin-top: 49px;
//     margin-bottom: 46px;
//     display: flex;
//     flex-direction: column;
//     gap: 14px;
//   }
// `;
