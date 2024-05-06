import { styled } from 'styled-components';
import Modal from 'react-modal';
import bgModalMobile from '../../assets/img/bg-modal/bg-modal-mob.png';
import bgModalTablet from '../../assets/img/bg-modal/bg-modal-tabl.png';
import bgModalDesktop from '../../assets/img/bg-modal/bg-modal-desk.png';
import bgModalMobileWebP from '../../assets/img/bg-modal/bg-modal-mob.webp';
import bgModalTabletWebP from '../../assets/img/bg-modal/bg-modal-tabl.webp';
import bgModalDesktopWebP from '../../assets/img/bg-modal/bg-modal-desk.webp';

export const DevelopersModalStyled = styled(Modal)`
  position: absolute;
  border: none;
  outline: none;
  transform: translate(-50%, -50%);
  transition: all 1s ease-in-out;
  width: 100%;
  max-height: 100%;
  background-color: #fff;
  top: 50%;
  left: 50%;
  overflow-y: auto;

  .bg-container {
    background-repeat: no-repeat;
    background-position: bottom right;
    background-size: auto;
    background-image: url(${bgModalMobile});
    background-image: -webkit-image-set(url(${bgModalMobileWebP}));
  }
  .content-container {
    color: #0b0b0b80;
    padding: 20px 16px;
    font-size: 14px;
    letter-spacing: -0.02em;
  }
  .dev-modal-up {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 65px;
  }
  .сloseBtn {
    display: flex;
    align-items: center;
    gap: 8px;
    color: inherit;
    background: none;
    border: none;
    padding: 0;
    outline: none;
  }
  .сloseText {
    display: none;
  }
  .icon-close {
    stroke: rgba(11, 11, 11, 0.5);
  }
  h2 {
    font-family: Oddval;
    color: #0b0b0b;
    font-size: 24px;
    font-weight: 600;
    line-height: 1.3;
    text-align: left;
    max-width: 270px;
    margin-bottom: 60px;
  }
  .orange-el {
    color: #f77d07;
  }

  .item {
    margin-bottom: 60px;
  }
  .nav-control {
    margin-bottom: 213px;
    display: flex;
    gap: 16px;
    align-items: center;
    justify-content: center;
  }

  .next-btn,
  .prev-btn {
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
    border-radius: 50%;
    border: none;
    outline: none;
    background-color: #f77d07;
  }
  .next-btn.swiper-button-disabled,
  .prev-btn.swiper-button-disabled {
    background-color: inherit;
    border: 1px solid #f77d07;
  }
  .icon-arrow {
    fill: #ffffff;
  }
  .swiper-button-disabled .icon-arrow {
    fill: #f77d07;
  }

  @media (min-width: 768px) {
    .bg-container {
      background-image: url(${bgModalTablet});
      background-image: -webkit-image-set(url(${bgModalTabletWebP}));
    }
    .content-container {
      padding: 32px 32px;
      font-size: 16px;
    }
    .dev-modal-up {
      margin-bottom: 144px;
    }

    .сloseText {
      display: block;
    }
    .icon-close {
      width: 14px;
      height: 14px;
    }

    h2 {
      font-size: 45px;
      margin-bottom: 80px;
      max-width: unset;
    }
    .item {
      margin-bottom: 160px;
    }
    .nav-control {
      gap: 20px;
      margin-bottom: 148px;
    }

    .next-btn,
    .prev-btn {
      width: 60px;
      height: 60px;
    }
    .icon-arrow {
      width: 21px;
      height: 18px;
    }
  }
  @media (min-width: 1440px) {
    .bg-container {
      background-image: url(${bgModalDesktop});
      background-image: -webkit-image-set(url(${bgModalDesktopWebP}));
    }
    .content-container {
      padding: 40px 80px;
    }
    .dev-modal-up {
      margin-bottom: 80px;
    }
    h2 {
      font-size: 60px;
    }
    .nav-control {
      margin-bottom: 110px;
    }
  }
`;
export const ModalDown = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  .after-el {
    position: relative;
  }

  .after-el::after {
    content: '';
    position: absolute;
    top: 40%;
    height: 70%;
    width: 1px;
    background-color: #0b0b0b80;
    right: -8px;
    transform: translateY(-50%);
  }
  div {
    width: 100%;
    display: flex;
    gap: 8px;
  }
  @media (min-width: 768px) {
    font-size: 16px;
    align-items: baseline;

    .after-el {
      margin-left: auto;
    }
    .after-el::after {
      right: -10px;
    }
    div {
      width: unset;
      gap: 10px;
      margin-left: 10px;
      align-items: center;
    }
    .icon-logo-goit {
      width: 100px;
      height: 30px;
    }
  }
`;
