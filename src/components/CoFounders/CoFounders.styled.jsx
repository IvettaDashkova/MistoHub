import styled from '@emotion/styled';
import { StyledContainer } from '../../shared/Container/Container.styled';

export const SectionContainer = styled.section``;

export const CoFoundersContainer = styled(StyledContainer)`
  position: relative;
  padding: 60px 15px;
  overflow: hidden;
  display: block;
  @media (max-width: 374px) {
    padding: 60px 0;
  }
  @media screen and (min-width: 430px) {
    overflow: unset;
  }
  @media (min-width: 768px) {
    padding: 120px 32px;
    overflow: hidden;
  }
  @media screen and (min-width: 950px) {
    overflow: unset;
  }
  @media (min-width: 1440px) {
    padding: 150px 120px;
  }
`;

export const SectionTitle = styled.h2`
  color: #0b0b0b;
  font-weight: 700;
  font-size: 24px;
  line-height: 133%;
  letter-spacing: -0.02em;
  @media (max-width: 374px) {
    margin-left: 15px;
  }
  @media (min-width: 768px) {
    font-size: 45px;
    line-height: 111%;
  }
  @media (min-width: 1440px) {
    font-size: 60px;
    line-height: 113%;
  }
`;

export const SectionSpan = styled.span`
  color: #f77d07;
  text-transform: uppercase;
`;

export const List = styled.ul`
  display: flex;
  gap: 36px 25px;
  justify-content: center;
  max-width: 343px;
  margin: 32px auto 0;
  flex-wrap: wrap;
  @media (max-width: 374px) {
    max-width: 312px;
    gap: 36px 8px;
  }
  @media (min-width: 768px) {
    max-width: 704px;
    margin-top: 80px;
    gap: 54px 50px;
  }
  @media (min-width: 1440px) {
    max-width: 1200px;
    gap: 50px;
  }
`;
