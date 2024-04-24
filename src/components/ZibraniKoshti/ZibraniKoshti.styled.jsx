import styled from '@emotion/styled';
import backgroundImage from './Rectangle 42862.png';

export const ContainerWrapper = styled.div`
  background-image: url('${backgroundImage}');
  background-size: cover;
`;

export const TitleContainer = styled.div`
  padding: 0 65px;
`;

export const MainTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: #ffffff;
`;

export const Price = styled(MainTitle)`
  font-size: 50px;
  margin-bottom: 40px;
`;

export const ProgressBar = styled.div`
  padding: 0 55px;
  margin-bottom: 55px;
`;

export const Accumulated = styled.div`
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    transform: translateX(50%) translateY(-30%);
    width: 24px;
    height: 24px;
    background-color: #fff;
    border-radius: 50%;
  }
`;

export const AmountGif = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  line-height: 1.3;
  font-weight: 600;
  letter-spacing: -0.02em;
  top: -60px;
  right: -41px;
  width: 84px;
  height: 42px;
  border-radius: 45px;
  background-color: #fff;

  &::before {
    content: '';
    position: absolute;
    bottom: -9px;
    left: 50%;
    transform: translateX(-50%);
    border-width: 14px 14px 0;
    border-style: solid;
    border-color: #fff transparent transparent;
  }

  &::after {
    content: 'Зібрано';
    position: absolute;
    bottom: -70px;
    font-size: 12px;
    color: #ffffff;
    font-weight: 500;
    line-height: 1.3;
  }
`;

export const CardsList = styled.ul`
  display: flex;
  color: #fff;
  gap: 8px;
  overflow: hidden;
`;

export const NeedToDoItem = styled.li`
  background: #ffffff1a;
  border-radius: 10px;
  border: 1px solid #ffffff14;
  height: 66px;
  width: 134px;

  padding: 10px;

  > h4 {
    font-weight: 600;
    font-size: 10px;
    line-height: 1.2;
    letter-spacing: -0.02em;
    margin-bottom: 2px;
  }

  > p {
    font-weight: 500;
    font-size: 8px;
    line-height: 1.2;
  }
`;

export const MadeList = styled.ul`
  display: flex;
  gap: 8px;

  > li {
    background: #ffffff1a;
    border-radius: 10px;
    border: 1px solid #ffffff14;
    padding: 10px;
    width: 140px;
    h4 {
      font-weight: 600;
      font-size: 10px;
      line-height: 1.2;
      margin-bottom: 2px;
    }
  }
`;

export const MadeListItem = styled.li`
  > ul {
    li {
      list-style-type: disc;
    }
  }
`;
