import styled, { keyframes, css } from 'styled-components';

const generateKeyframes = ({ startTranslate, endTranslate }) => keyframes`
  0% {
    transform: translateX(${startTranslate}%);
  }
  100% {
    transform: translateX(${endTranslate}%);
  }
`;

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;

  div {
    position: relative;
    overflow: hidden;
  }

  ul {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    column-gap: 13px;
  }
`;
export const Container = styled.div`
  max-width: 375px;
  overflow: hidden;
  @media screen and (min-width: 768px) {
    max-width: 768px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 1440px;
  }
`;
export const GroupContainer = styled.div`
  ${(props) => {
    const left = {
      startTranslate: 0,
      endTranslate:
        props.length === 20
          ? -(props.length * props.length - 0.3 * props.length)
          : -(props.length * props.length + 0.3 * props.length),
    };

    const right = {
      startTranslate:
        props.length === 20
          ? -(props.length * props.length - 0.3 * props.length)
          : -(props.length * props.length + 0.3 * props.length),
      endTranslate: 0,
    };
    const animToLeft = generateKeyframes(left);
  const animToRight = generateKeyframes(right);
  
      const leftTablet = {
      startTranslate: 0,
      endTranslate:
        props.length === 20
          ? -(props.length * props.length + 2.2 * props.length)
          : -(props.length * props.length + 0.2 * props.length),
    };

    const rightTablet = {
      startTranslate:
        props.length === 20
          ? -(props.length * props.length + 2.2 * props.length)
          : -(props.length * props.length + 0.2 * props.length),
      endTranslate: 0,
    };
    const animToLeftTablet = generateKeyframes(leftTablet);
    const animToRightTablet = generateKeyframes(rightTablet);

    const leftDesktop = {
      startTranslate: 0,
      endTranslate:
        props.length === 20
          ? -(props.length * props.length - 10.5 * props.length)
          : -(props.length * props.length + 1.2 * props.length),
    };
    const rightDesktop = {
      startTranslate:
        props.length === 20
          ? -(props.length * props.length - 10.5 * props.length)
          : -(props.length * props.length - 8 * props.length),
      endTranslate: 0,
    };
    const animToLeftDesktop = generateKeyframes(leftDesktop);
    const animToRightDesktop = generateKeyframes(rightDesktop);

    return css`
      &.group-0 {
        overflow: visible;
        animation: ${css`
          ${animToLeft} 50s linear infinite
        `};
      }
      &.group-1 {
        overflow: visible;
        animation: ${css`
          ${animToRight} 50s linear infinite
        `};
      }
      &.group-2 {
        overflow: visible;
        animation: ${css`
          ${animToLeft} 50s linear infinite
        `};
      }
      &.group-3 {
        overflow: visible;
        animation: ${css`
          ${animToRight} 50s linear infinite
        `};
      }
      &.group-4 {
        overflow: visible;
        animation: ${css`
          ${animToLeft} 50s linear infinite
        `};
      }
      &.group-5 {
        overflow: visible;
        animation: ${css`
          ${animToRight} 50s linear infinite
        `};
      }
      &.group-0:hover,
      &.group-1:hover,
      &.group-2:hover,
      &.group-3:hover,
      &.group-4:hover,
      &.group-5:hover {
        animation-play-state: paused;

      }
  @media screen and (min-width: 768px) {
      &.group-0 {
        overflow: visible;
        animation: ${css`
          ${animToLeftTablet} 50s linear infinite
        `};
      }
      &.group-1 {
        overflow: visible;
        animation: ${css`
          ${animToRightTablet} 50s linear infinite
        `};
      }
      &.group-2 {
        overflow: visible;
        animation: ${css`
          ${animToLeftTablet} 50s linear infinite
        `};
      }
      &.group-3 {
        overflow: visible;
        animation: ${css`
          ${animToRightTablet} 50s linear infinite
        `};
      }
      &.group-4 {
        overflow: visible;
        animation: ${css`
          ${animToLeftTablet} 50s linear infinite
        `};
      }
      &.group-5 {
        overflow: visible;
        animation: ${css`
          ${animToRightTablet} 50s linear infinite
        `};
      }
  }
      @media screen and (min-width: 1440px) {
        &.group-0 {
          overflow: visible;
          animation: ${css`
            ${animToLeftDesktop} 80s linear infinite
          `};
        }
        &.group-1 {
          overflow: visible;
          animation: ${css`
            ${animToRightDesktop}  80s linear infinite
          `};
        }
        &.group-2 {
          overflow: visible;
          animation: ${css`
            ${animToLeftDesktop}  80s linear infinite
          `};
        }
        &.group-3 {
          overflow: visible;
          animation: ${css`
            ${animToRightDesktop}  80s linear infinite
          `};
        }
        &.group-4 {
          overflow: visible;
          animation: ${css`
            ${animToLeftDesktop}  80s linear infinite
          `};
        }
        &.group-5 {
          overflow: visible;
          animation: ${css`
            ${animToRightDesktop}  80s linear infinite
          `};
        }
      }
    `;
  }}
  .item-list {
    width: 80px;
    height: 62px;
    margin: 0;
    padding: 0;
    border-radius: 10px;
    background-color: transparent;
    border: none;
  }

  .item-list img {
    filter: opacity(0px);
    transition: filter 1s linear;
  }

  .item-list.on-blur img {
    filter: opacity(35%);
  }

  ul:hover {
    animation-play-state: paused;
  }

  li {
    cursor: pointer;
    flex-shrink: 0;
    flex-grow: 0;
  }

  img {
    display: block;
    width: 80px;
    height: 62px;
    border-radius: 10px;
    object-fit: cover;
  }

  @media screen and (min-width: 768px) {
    row-gap: 30px;

    ul {
      column-gap: 30px;
    }

    .item-list {
      width: 180px;
      height: 140px;
    }

    img {
      width: 180px;
      height: 140px;
      border-radius: 10px;
    }
  }

  @media screen and (min-width: 1440px) {
    .item-list img {
      filter: opacity(0px);
      transition: filter 1s linear;
    }

    .item-list.on-blur img {
      filter: opacity(35%);
    }

    ul:hover {
      animation-play-state: paused;
    }

    li {
      cursor: pointer;
    }
  }
`;
