import styled from '@emotion/styled';

export const SectionContainer = styled.section`
  position: relative;
  margin: 0 auto;
  padding: 60px 15px;
  overflow: hidden;
  @media (min-width: 767px) {
    padding: 120px 32px;
  }
  @media (min-width: 1439px) {
    padding: 150px 120px;
  }
`;

export const SectionTitle = styled.h2`
  color: #0b0b0b;
  font-weight: 700;
  font-size: 24px;
  line-height: 133%;
  letter-spacing: -0.02em;
  @media (min-width: 767px) {
    font-size: 45px;
    line-height: 111%;
  }
  @media (min-width: 1439px) {
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
  @media (min-width: 767px) {
    max-width: 704px;
    margin-top: 80px;
    gap: 54px 50px;
  }
  @media (min-width: 1439px) {
    max-width: 1200px;
    gap: 50px;
  }
`;
