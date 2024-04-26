import styled from 'styled-components';

export const ModalCompanyWrapper = styled.div`
  .text {
    color: rgba(11, 11, 11, 0.5);
    font-family: 'MacPaw Fixel Display';
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
    font-family: 'MacPaw Fixel Display';
    font-size: 14px;
    line-height: 18px; /* 128.571% */
    letter-spacing: -0.28px;
    min-width: 303px;
  }

  .contentWrapper {
    padding: 18px 10px 10px 10px;
    background-image: url('../svgModalInvest/Vector-background.svg');
    background-repeat: no-repeat;
    background-position: right center;
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

  .svgWrapper {
    background: #f77d07;
    width: 30px;
    height: 30px;
    border-radius: 100px;
    display: inline-flex;
    padding: 8px;
    align-items: center;
    gap: 10px;
  }

  a {
    padding: 0;
  }
`;
