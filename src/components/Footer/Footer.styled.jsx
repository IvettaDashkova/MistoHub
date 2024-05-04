import { styled } from 'styled-components';
import { StyledContainer } from '../../shared/Container/Container.styled';

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
export const FooterContainer = styled(StyledContainer)`
  min-width: 320px;
  max-width: 375px;
  padding: 32px 16px 20px;
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
  .icon-logo {
    width: 81px;
    height: 27px;
    fill: #ffffff;
    margin-bottom: 24px;
  }
  address {
    font-style: normal;
  }
  .address-mistohub {
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
    outline: none;
    font-size: 20px;
    transition: color 0.25s ease-in-out;
    &:hover,
    &:focus {
      color: #f77d07;
    }
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
    outline: none;
    transition: background 0.25s ease-in-out;
    transition: color 0.25s ease-in-out;

    &:hover,
    &:focus {
      background: #e97200;
    }
    &:active {
      color: #898b90;
      background: #e3e3e3;
    }
  }
  @media (min-width: 375px) {
    width: 375px;
  }
  @media (min-width: 768px) {
    width: 768px;
    min-width: unset;
    max-width: unset;
    padding: 64px 32px 32px;
    .map-wrapper {
      min-width: unset;
      max-width: unset;
      width: 704px;
      height: 486px;
      margin-bottom: 64px;
    }
    .icon-logo {
      width: 118px;
      height: 40px;
      margin-bottom: 30px;
    }
    .address-mistohub {
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
    padding: 120px 120px 38px;
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
    outline: none;
    margin-bottom: 20px;
    transition: color 0.25s ease-in-out;
    &: hover,
    &:focus {
      color: #ffffff;
      .icon-goit-white {
        fill: #ffffff;
      }
    }
  }
  .icon-goit-white {
    width: 59px;
    height: 18px;
    fill: #f77d07;
    transition: fill 0.25s ease-in-out;
  }
  .social-block {
    display: flex;
    margin-bottom: 0px;
    gap: 8px;
  }
  .link-inst {
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
    border-radius: 50%;
    background: #ffffff;
    outline: none;
    transition: background 0.25s ease-in-out;
    &:hover,
    &:focus {
      background: radial-gradient(
        230.93% 230.93% at 102.01% 2.03%,
        #f9ed32 0%,
        #ee2a7b 36%,
        #d22a8a 44%,
        #8b2ab2 60%,
        #1b2af0 83%,
        #002aff 88%
      );
      .icon-instagram {
        fill: #ffffff;
      }
    }
  }
  .icon-instagram {
    fill: #0b0b0b;
    transition: fill 0.25s ease-in-out;
  }
  .link-fb {
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
    border-radius: 50%;
    background: #ffffff;
    outline: none;
    transition: background 0.25s ease-in-out;
    &:hover,
    &:focus {
      background: linear-gradient(180deg, #18acfe 0%, #0165e1 100%);
      .icon-faceb {
        fill: #ffffff;
      }
    }
  }
  .icon-faceb {
    fill: #0b0b0b;
    transition: fill 0.25s ease-in-out;
  }

  @media (min-width: 768px) {
    padding-top: 38px;
    display: flex;
    column-gap: 10px;
    align-items: baseline;
    flex-wrap: wrap;
    row-gap: 24px;

    p {
      padding-right: 10px;
    }
    .btn-goit {
      gap: 10px;
      margin-bottom: 0px;
    }
    .icon-goit-white {
      width: 100px;
      height: 30px;
    }
    .social-block {
      gap: 10px;
    }
    .icon-instagram {
      width: 40px;
      height: 40px;
    }
    .icon-faceb {
      width: 40x;
      height: 40px;
    }
  }
  @media (min-width: 1440px) {
    .social-block {
      margin-left: auto;
      align-self: center;
    }
  }
`;
