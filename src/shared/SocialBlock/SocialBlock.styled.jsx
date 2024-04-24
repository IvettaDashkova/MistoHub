import styled from 'styled-components';

export const SocialWrapper = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 14px;

  a {
    position: relative;
    display: block;
    width: 37px;
    height: 37px;
    border-radius: 50%;

    svg {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }

  .instagram-link {
    background: radial-gradient(
      circle 100px at 100% 0%,
      rgba(249, 237, 50, 1) 0%,
      rgba(238, 42, 123, 1) 36%,
      rgba(210, 42, 138, 1) 44%,
      rgba(139, 42, 178, 1) 60%,
      rgba(27, 42, 240, 1) 83%,
      rgba(0, 42, 255, 1) 88%
    );
  }

  .facebook-link {
    background: linear-gradient(to bottom, #18acfe 0%, #0165e1 100%);
  }

  a:hover .mask-gradient {
    fill: rgba(255, 255, 255, 0);
    transition: fill 0.25s ease-in-out;
  }

  a:hover .logo {
    fill: rgba(255, 255, 255, 1);
    transition: fill 0.25s ease-in-out;
  }
`;
