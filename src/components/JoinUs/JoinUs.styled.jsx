import styled from 'styled-components';
import { StyledContainer } from '../../shared/Container/Container.styled';

export const JoinUsSection = styled.section`
  letter-spacing: -0.02em;
  color: #ffffff;
  padding-top: 60px;
  padding-bottom: 60px;
`;

export const JoinUsContainer = styled(StyledContainer)`
  position: relative;
  height: 740px;
  max-width: 375px;
  padding-top: 130px;
  overflow: hidden;
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 24px;
  line-height: 133%;
  color: #ffffff;
`;

export const Description = styled.p`
  margin-top: 14px;
  font-weight: 500;
  font-size: 14px;
  line-height: 129%;
`;

export const StatsContainer = styled.div`
  margin-top: 24px;
`;

export const StatsTitle = styled.h3`
  font-weight: 500;
  font-size: 16px;
  line-height: 125%;
`;

export const StatsList = styled.ul`
  margin-top: 10px;
  display: flex;
  gap: 10px;
  font-weight: 600;
  font-size: 12px;
  line-height: 133%;
`;

export const StatsListItem = styled.li`
  padding: 10px 12px;
  border-radius: 30px;
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

export const JoinButton = styled.button`
  font-weight: 600;
  font-size: 14px;
  line-height: 129%;

  margin-top: 24px;
  padding: 15px 20px;
  height: 48px;
  border-radius: 30px;
  color: #0b0b0b;
  background: #ffffff;
  border: none;
`;

export const AlreadyJoined = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 133%;
  span {
    font-weight: 600;
    font-size: 14px;
    line-height: 129%;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1px;
  width: fit-content;

  position: absolute;
  top: 561px;
  left: 111px;
`;
