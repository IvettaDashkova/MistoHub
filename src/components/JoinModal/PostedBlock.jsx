import { useMediaQuery } from 'react-responsive';
import { PostedStyledBlock } from './JoinModal.styled.jsx';

const PostedBlock = ({ handleCloseModal }) => {
  const isDesctop = useMediaQuery({ minWidth: 1024 });
  return (
    <PostedStyledBlock>
      <h2 className="joinTitle">
        <span className="joinTitleAccent">Дякуємо </span>за перший крок{' '}
        {isDesctop && <br />} до змін Полтави! Ваші дані
        {isDesctop && <br />} успішно
        <span className="joinTitleAccent"> відправлені!</span>
      </h2>
      <p className="joinText">
        Протягом доби звʼяжемось з вами для обговорення подальших етапів.
      </p>
      <button
        className="joinSuccessBtn"
        type="button"
        onClick={handleCloseModal}
      >
        На сторінку
      </button>
    </PostedStyledBlock>
  );
};

export default PostedBlock;
