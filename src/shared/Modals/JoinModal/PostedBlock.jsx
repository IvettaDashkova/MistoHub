import { useMediaQuery } from 'react-responsive';

import { PostedStyledBlock } from '/src/shared/Modals/JoinModal/JoinModal.styled';

const PostedBlock = ({ handleCloseModal }) => {
  const isDesctop = useMediaQuery({ minWidth: 1440 });
  const isMobile = useMediaQuery({ maxWidth: 375 });
  return (
    <PostedStyledBlock>
      <h2 className="joinTitle">
        <span className="joinTitleAccent">Дякуємо </span>за перший крок
        {!isMobile && <br />} до змін Полтави! Ваші дані
        {!isMobile && <br />} успішно
        <span className="joinTitleAccent"> відправлені!</span>
      </h2>
      <p className="joinText">
        Протягом доби звʼяжемось з вами для {!isDesctop && <br />}
        обговорення подальших етапів.
      </p>
      <button
        className="joinSuccessBtn"
        type="button"
        title="На сторінку"
        onClick={handleCloseModal}
      >
        На сторінку
      </button>
    </PostedStyledBlock>
  );
};

export default PostedBlock;
