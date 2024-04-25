import styled from 'styled-components';
// import sprite from '../../../../acces/hero/iconsHero/sprite.svg';

// :root {
//   --main-black: #0b0b0b;
//   --main-white: #ffffff;
//   --accent-orange: #f77d07;
//   --main-background: #e6e6e6;
//   --secondary-background: #f8f8f8;

//   --font-family: 'MacPaw Fixel Display', sans-serif;
//   --second-family: 'Oddval', sans-serif;
//   --third-family: 'Inter', sans-serif;
// }

export const HeroStyledСontainer = styled.section`
  position: relative;
  min-width: 320px;
  max-width: 375px;
  height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  @media only screen and (min-width: 768px) {
    max-width: 768px;
    height: 1024px;
  }

  @media only screen and (min-width: 1024px) {
    max-width: 1440px;
    height: 880px;
  }

  .mySwiper {
    min-width: 320px;
    max-width: 375px;
    height: 700px;
    overflow: hidden;

    @media only screen and (min-width: 768px) {
      max-width: 768px;
      height: 1024px;
    }

    @media only screen and (min-width: 1024px) {
      max-width: 1440px;
      height: 880px;
    }

    .swiper-wrapper {
      position: relative;
      z-index: 0;
    }

    .swiper-slide {
      position: relative;
      z-index: 1;
      filter: brightness(0.8);

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(11, 11, 11, 0.6);
        z-index: 2;
        filter: brightness(0.8);
      }
    }

    .swiper-button-prev,
    .swiper-button-next {
      position: absolute;
      top: 660px;
      width: 44px;
      height: 44px;
      border-radius: 50%;
      background-color: var(--white-color);
      border: 2px solid rgba(255, 255, 255, 0.15);
      box-shadow: 0 14px 44px 0 rgba(14, 20, 34, 0.08);
      transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

      &:hover,
      &:focus-visible {
        background-color: #f77d07;

        //TODO при ховері кнопки міняється філ для свг
      }

      @media only screen and (min-width: 768px) {
        width: 60px;
        height: 60px;
        top: 944px;
      }

      @media only screen and (min-width: 1024px) {
        top: 800px;
      }
    }

    .swiper-button-prev {
      right: 20px;
      left: 35%;

      //TODO при ховері кнопки міняється філ для свг

      @media only screen and (min-width: 768px) {
        right: 40px;
        left: 40%;
      }

      @media only screen and (min-width: 1024px) {
        left: 43%;
      }
    }

    .swiper-button-prev::after {
      content: '';
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path d="M12.586 27.414l-10-10c-0.781-0.781-0.781-2.047 0-2.828l10-10c0.781-0.781 2.047-0.781 2.828 0s0.781 2.047 0 2.828l-6.586 6.586h19.172c1.105 0 2 0.895 2 2s-0.895 2-2 2h-19.172l6.586 6.586c0.39 0.39 0.586 0.902 0.586 1.414s-0.195 1.024-0.586 1.414c-0.781 0.781-2.047 0.781-2.828 0z"/></svg>');
      background-repeat: no-repeat;
      background-size: contain;
      width: 16px;
      height: 14px;
      transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

      @media only screen and (min-width: 768px) {
        width: 20px;
        height: 18px;
      }
    }

    /* .swiper-button-prev:hover::after,
    .swiper-button-prev:focus-visible::after {
      fill: var(--accent-orange);
    } */

    .swiper-button-next {
      right: 35%;

      //TODO при ховері кнопки міняється філ для свг

      @media only screen and (min-width: 768px) {
        right: 40%;
      }

      @media only screen and (min-width: 1024px) {
        right: 43%;
      }
    }

    .swiper-button-next::after {
      content: '';
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path d="M19.414 27.414l10-10c0.781-0.781 0.781-2.047 0-2.828l-10-10c-0.781-0.781-2.047-0.781-2.828 0s-0.781 2.047 0 2.828l6.586 6.586h-19.172c-1.105 0-2 0.895-2 2s0.895 2 2 2h19.172l-6.586 6.586c-0.39 0.39-0.586 0.902-0.586 1.414s0.195 1.024 0.586 1.414c0.781 0.781 2.047 0.781 2.828 0z"/></svg>');
      background-repeat: no-repeat;
      background-size: contain;
      width: 16px;
      height: 14px;
      transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

      @media only screen and (min-width: 768px) {
        width: 20px;
        height: 18px;
      }
    }

    /* .swiper-button-next:hover::after,
    .swiper-button-next:focus-visible::after {
      fill: var(--accent-orange);
    } */

    .swiper-button-disabled {
      background-color: rgba(230, 230, 230, 0.15);
      backdrop-filter: blur(17px);
      opacity: 0.5;
      pointer-events: auto;

      &:hover,
      &:focus-visible {
        background-color: rgba(230, 230, 230, 0.15);
        border: 2px solid rgba(247, 125, 7);

        //TODO при ховері кнопки міняється філ для свг
        //TODO  і він інший для цієї кнопки
      }
    }
  }

  .heroImg {
    min-width: 320px;
    max-width: 375px;
    width: 100%;
    height: 700px;
    height: 100%;
    object-fit: cover;

    @media only screen and (min-width: 768px) {
      max-width: 768px;
      height: 1024px;
    }

    @media only screen and (min-width: 1024px) {
      max-width: 1440px;
      height: 880px;
    }
  }

  & > h2 {
    padding-left: 16px;
    padding-right: 16px;
    font-family: 'Oddval', sans-serif;
    font-weight: 600;
    font-size: 32px;
    line-height: 0.9;
    letter-spacing: -0.02em;
    text-align: center;
    color: var(--white-color);
    position: absolute;
    z-index: 1;

    & > span {
      text-transform: uppercase;
    }

    @media only screen and (min-width: 768px) {
      padding-left: 32px;
      padding-right: 32px;
      font-size: 68px;
      line-height: 0.9;
    }

    @media only screen and (min-width: 1024px) {
      width: 968px;
      font-size: 90px;
      line-height: 1;
    }
  }
`;

// export const HeroBtn = styled.button`
//   border-radius: 50%;
//   background-color: ${(props) =>
//     props.variant === 'disabled' ? 'rgba(230, 230, 230, 0.15)' : '#ffffff'};
//   width: 44px;
//   height: 44px;
//   border: 2px solid rgba(230, 230, 230, 0.6);
//   box-shadow: 0 14px 44px 0 rgba(14, 20, 34, 0.08);
//   ${(props) =>
//     props.variant === 'disabled' &&
//     'backdrop-filter: blur(17.399999618530273px);'}
//   transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
//   &:hover,
//   &:focus-visible {
//     background-color: ${(props) =>
//       props.variant === 'disabled' ? 'rgba(230, 230, 230, 0.1)' : '#f77d07'};
//     border: 1px solid rgba(247, 125, 7, 0.8);

//     & > svg {
//       fill: ${(props) =>
//         props.variant === 'disabled'
//           ? 'var(--accent-orange)'
//           : 'var(--main-white)'};
//       transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
//     }
//   }

//   & > svg {
//     width: 16px;
//     height: 14px;
//     fill: ${(props) =>
//       props.variant === 'disabled' ? 'var(--main-white)' : 'var(--main-black)'};
//     transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
//   }

//   @media only screen and (min-width: 768px) {
//     width: 60px;
//     height: 60px;

//     & > svg {
//       width: 20px;
//       height: 18px;
//     }
//   }
// `;

/* 
    & > div:nth-child(2) {
      margin-bottom: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    & > div:nth-child(2) > button {
      background-color: blue;
      border-radius: 50%;
      background-color: var(--main-white);
      width: 44px;
      height: 44px;
      border: 2px solid rgba(255, 255, 255, 0.8);
      box-shadow: 0 14px 44px 0 rgba(14, 20, 34, 0.08);
      transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

      &:hover,
      &:focus-visible {
        background-color: var(--accent-orange);
        border: 2px solid rgba(247, 125, 7, 0.8);

        & > div > svg {
          fill: red;
        }
        & > svg {
          fill: var(--main-white);
        }
      }

      & > svg {
        width: 16px;
        height: 14px;
        fill: var(--main-black);
        transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
      }

      @media only screen and (min-width: 768px) {
        width: 60px;
        height: 60px;
        top: 944px;
      }

      @media only screen and (min-width: 1024px) {
        top: 800px;
      }
    }
  } */
