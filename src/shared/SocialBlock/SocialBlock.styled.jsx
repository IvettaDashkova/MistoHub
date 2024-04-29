import styled from 'styled-components';

export const SocialWrapper = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 8px;

  a {
    display: block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  @media screen and (min-width: 768px) {
    column-gap: 14px;
  }
`;
