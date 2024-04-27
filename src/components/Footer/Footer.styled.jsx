import { styled } from 'styled-components';

export const StyledFooter = styled.footer`
  width: 100%;
  background-color: #0b0b0b;
  color: #ffffff;
  font-size: 14px;
  display: flex;
  justify-content: center;
   @media (min-width: 375px) {
   font-size: 16px;
`;
export const FooterContainer = styled.div`
  min-width: 320px;
  max-width: 375px;
  padding: 32px 16px 20px 16px;
  .footer-up {
    > div:first-child {
      display: none;
    }
  }
  .map-wrapper {
    min-width: 288px;
    max-width: 343px;
    height: 370px;
    border-radius: 20px;
    margin-bottom: 32px;
  }
  .address {
    line-height: 1.2;
    letter-spacing: -0.02em;
    text-align: left;

    margin-bottom: 24px;
  }
  ul {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 244px;
    padding: 20px;
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    margin-bottom: 40px;
  }

  li {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  a {
    color: inherit;
    font-size: 20px;
  }
  .btn-supp {
    font-size: 16px;
    font-weight: 600;
    color: inherit;
    padding: 14px 24px;
    gap: 8px;
    border: none;
    border-radius: 30px;
    background-color: #f77d07;
    margin-bottom: 64px;
    &:hover {
      background: #e3e3e3;
      color: #898b90;
    }
  }
  @media (min-width: 375px) {
    width: 375px;
  }
  @media (min-width: 768px) {
    width: 768px;
    min-width: unset;
    max-width: unset;
    padding: 64px 32px 32px 32px;
    .map-wrapper {
      min-width: unset;
      max-width: unset;
      width: 704px;
      height: 486px;
      margin-bottom: 64px;
    }
    .address {
      line-height: 1.5;
      margin-bottom: 30px;
    }
    ul {
      gap: 24px;
      width: 293px;
      padding: 24px;
      border-radius: 16px;
      border: 1px solid rgba(255, 255, 255, 0.2);
      margin-bottom: 30px;
    }
    a {
      font-size: 24px;
    }
    .btn-supp {
      font-size: 18px;
      padding: 23px 43px;
      border-radius: 60px;
      margin-bottom: 80px;
    }
  }
  @media (min-width: 1440px) {
    width: 1440px;
    padding: 120px 120px 38px 120px;
    .footer-up {
      display: flex;
      gap: 120px;
      flex-direction: row-reverse;
    }
    .map-wrapper {
      width: 787px;
      height: 516px;
      margin-bottom: 80px;
    }
    ul {
      margin-bottom: 60px;
    }
    .btn-supp {
      margin-bottom: 0px;
    }
  }
`;
export const FooterDown = styled.div`
  color: rgba(255, 255, 255, 0.5);
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  padding-top: 20px;
  width: 100%;
  div {
    display: flex;
    margin-bottom: 8px;
    gap: 8px;
  }
  p {
    padding-right: 8px;
    position: relative;
  }
  p::after {
    content: '';
    position: absolute;
    top: 55%;
    height: 80%;
    width: 1px;
    background-color: rgba(255, 255, 255, 0.5);
    right: 0;
    transform: translateY(-50%);
  }
  .btn-goit {
    display: flex;
    align-items: center;
    gap: 8px;
    color: inherit;
    background: none;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }
  .btn-goit:hover {
    color: #ffffff;
  }
  .icon-goit-white {
    width: 59px;
    height: 18px;
    fill: #bbb;
  }
  // .icon-goit-white path:hover {
  //   fill: #ffffff;
  // }
  @media (min-width: 768px) {
    padding-top: 38px;
    display: flex;
    gap: 10px;
    align-items: baseline;
    p {
      padding-right: 10px;
    }
    .btn-goit {
      gap: 10px;
    }
    .icon-goit-white {
      width: 100px;
      height: 30px;
    }
  }
`;
