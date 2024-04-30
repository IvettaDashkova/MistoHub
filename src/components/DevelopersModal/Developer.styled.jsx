import styled from 'styled-components';

export const ListItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .photo-container{
     position: relative;
     margin-bottom:16px;
  }
  .photo-img{
    border-radius: 50%;
    position: relative;
    }

  .dev-link{
  background-color: #f77d07;
  width: 30px;
  height: 30px;
  border-radius: 100px;
  padding: 8px;
  position: absolute;
  left: 50%;
  bottom: -12px;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify - content: center;
    }
  .icon-linkedin{
      fill: #FFFFFF;
    }

  h3 {
   color: #0B0B0B;
    font-family: Oddval;
    font-size: 18px;
    font-weight: 600;
    line-height: 1.2;
    letter-spacing: -0.02em;
    text-align: center;
    margin-bottom:8px;
  }
  p {
    font-size: 12px;
    font-weight: 500;
    line-height: 1.3;
    letter-spacing: -0.02em;
    text-align: center;
  }

  @media (min-width: 768px) {
      .photo-container{
     margin-bottom:30px;
  }
    h3 {
      font-size: 20px;
      line-height: 1.2;
      letter-spacing: -0.02em;
    }
    p {
      font-size: 16px;
    }
    .dev-link{
      padding:10px;
  width: 36px;
  height: 36px;
    }
  }
    
`;
