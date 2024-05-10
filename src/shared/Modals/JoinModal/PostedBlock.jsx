import { useMediaQuery } from 'react-responsive';
import { useEffect, useRef } from 'react';

import { PostedStyledBlock } from '/src/shared/Modals/JoinModal/JoinModal.styled';

const PostedBlock = ({ handleCloseModal }) => {
  const blockRef = useRef(null);

  useEffect(() => {
    blockRef.current.focus();
  }, []);

  const isDesctop = useMediaQuery({ minWidth: 1440 });
  const isMobile = useMediaQuery({ maxWidth: 375 });
  return (
    <div
      ref={blockRef}
      tabIndex={-1}
      onKeyDown={(e) => {
        if (e.key === 'Escape') {
          handleCloseModal();
        }
      }}
    >
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
    </div>
  );
};

export default PostedBlock;
