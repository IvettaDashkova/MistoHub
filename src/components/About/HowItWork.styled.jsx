import styled from '@emotion/styled';
import bgImage from '../../assets/about/howItWorkBg.svg';

export const HowItWorkSection = styled.section`
  width: 1440px;
  margin: 0 auto;
  margin-bottom: 150px;
  padding: 258px 120px 207px;
  background-image: url(${bgImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: auto 100%;

  .how-it-work-title {
    font-family: Oddval;
    font-size: 60px;
    font-weight: 600;
    line-height: 1.13;
    letter-spacing: -0.02em;
    text-align: left;
    color: #ffffff;
    margin-bottom: 80px;
  }

  .accent{
    color: #f77d07;
  }

  .how-it-work-btn {
    display: block;
    padding: 23px 46px;
    border-radius: 60px;
    opacity: 0px;
    background: #ffffff;
    border: none;
    outline: none;
    margin: 0 auto;

    font-family: MacPaw Fixel Display;
    font-size: 18px;
    font-weight: 600;
    line-height: 1.33;
    letter-spacing: -0.02em;
    text-align: center;
    color: #0b0b0b;

    &:hover {
      background: #e3e3e3;
      color: #898b90;
    }
  }
`;

export const HowItWorkList = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 80px;
`;

export const HowItWorkItem = styled.li`
  background: #ffffff;
  padding: 40px;
  border-radius: 20px;
  width: calc((100% - 48px) / 3);

  &:first-child {
    width: calc(47% - 24px);
  }
  &:nth-child(2) {
    width: 53%;
  }
`;

export const HowItWorkNumber = styled.div`
  width: 72px;
  height: 72px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  opacity: 0px;
  background: #f77d07;
  box-shadow: 0px 1px 4px 0px #1018280f;
  margin-bottom: 30px;

  font-size: 40px;
  font-weight: 500;
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: #ffffff;
`;

export const HowItWorkItemText = styled.p`
  font-family: Oddval;
  font-size: 22px;
  font-weight: 600;
  line-height: 1.18;
  letter-spacing: -0.02em;
  text-align: left;
  color: #0b0b0b;
`;
