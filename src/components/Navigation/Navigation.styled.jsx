import styled from 'styled-components';

export const StyledNavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  list-style: none;
  padding: 0;
  margin-top: 175px;
  margin-bottom: 184px;
`;

export const StyledText = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.02em;
  color: rgba(11, 11, 11, 0.5);
  margin: 0;
`;

export const StyledNavLink = styled.a`
  font-weight: 600;
  font-size: 24px;
  line-height: 1.17;
  letter-spacing: -0.02em;
  color: #0b0b0b;
  margin-right: 50px;

  &:hover {
    color: #f77d07;
    outline: none;
    border: none;
  }
`;

export const HoverContainer = styled.div`
  width: 261px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
