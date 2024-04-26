import Modal from 'react-modal';
import { useState } from 'react';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

import sprite from '/src/assets/joinModal/sprite.svg';
import { JoinModalStyled } from './JoinModal.styled.jsx';

Modal.setAppElement('#root');

const UserRegisterSchema = Yup.object().shape({
  name: Yup.string()
    .required('User name is required!')
    .min(2, 'User name must be at least 2 characters!')
    .max(50, 'User name must be less than 50 characters!'),
  email: Yup.string()
    .required('Email is required!')
    .email('Must be a valid email!'),
  password: Yup.string()
    .required('Password is required!')
    .min(8, 'Password must be at least 8 characters!'),
});

const INITIAL_FORM_DATA = {
  name: '',
  email: '',
  password: '',
};

const JoinModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button type="button" onClick={openModal}>
        Open Modal
      </button>

      <JoinModalStyled
        isOpen={isModalOpen}
        // onRequestClose={() => setIsModalOpen(false)}
      >
        <p>Підтримати проєкт</p>
        <button className="joinCloseBtn" type="button" onClick={closeModal}>
          <span className="joinCloseText">Закрити</span>
          <svg className="joinCloseSvg">
            <use
              width={14}
              height={14}
              xlinkHref={`${sprite}#icon-close`}
            ></use>
          </svg>
        </button>
        <Formik
          validationSchema={UserRegisterSchema}
          initialValues={INITIAL_FORM_DATA}
          // onSubmit={handleSubmit}
        >
          <Form className="joinForm">
            <h2 className="joinTitle">
              Приєднуйся до спільноти{' '}
              <span className="joinTitleAccent">супергероїв</span> міста!
            </h2>

            <ul className="joinList">
              <li>
                <label className="joinLabel">
                  <span>Ім’я*</span>
                  <Field
                    className="joinInput"
                    placeholder="name"
                    type="text"
                    name="name"
                  />
                  {/* <ErrorMessage
                className={css.errorMsg}
                name="name"
                component="span"
              /> */}
                </label>
              </li>
              <li>
                <label className="joinLabel">
                  <span>Прізвище*</span>
                  <Field
                    className="joinInput"
                    placeholder="last name"
                    type="text"
                    name="lastname"
                  />
                  {/* <ErrorMessage
                className={css.errorMsg}
                name="email"
                component="span"
              /> */}
                </label>
              </li>
              <li>
                <label className="joinLabel">
                  <span>Телефон*</span>
                  <Field
                    className="joinInput"
                    placeholder="+380"
                    type="text"
                    name="phone"
                  />
                  {/* <ErrorMessage
                className={css.errorMsg}
                name="password"
                component="span"
              /> */}
                </label>
              </li>
              <li>
                <label className="joinLabel">
                  <span>Інстаграм/Фейсбук</span>
                  <Field
                    className="joinInput"
                    placeholder="link"
                    type="link"
                    name="link"
                  />
                  {/* <ErrorMessage
                className={css.errorMsg}
                name="password"
                component="span"
              /> */}
                </label>
              </li>
              <li>
                <label className="joinLabel">
                  <span>Коротко про себе</span>
                  <Field
                    as="textarea"
                    className="joinInput"
                    placeholder="Tell me about yourself"
                    type="text"
                    name="about"
                  />
                  {/* <ErrorMessage
                className={css.errorMsg}
                name="password"
                component="span"
              /> */}
                </label>
              </li>
            </ul>

            <button
              className="joinSubmitBtn"
              type="submit"
              title="Click to submit"
              aria-label="Відправити"
            >
              Відправити
            </button>
          </Form>
        </Formik>
        <div className="hidden">
          <h2 className="joinTitle">
            Дякуємо! <span className="joinTitleAccent">Дані</span> успішно
            відправлені!
          </h2>
          <p className="joinInfo">
            Наш менеджер зв’яжеться з вами найближчим часом для подальшої
            обробки вашого запиту. Дякуємо за ваш інтерес!
          </p>
          <button type="button" onClick={closeModal}>
            На сторінку
          </button>
        </div>
        <div className="hidden">
          <h2 className="joinTitle">
            <span className="joinTitleAccent">На жаль,</span> наразі наш сервер
            не відповідає!
          </h2>
          <p className="joinInfo">
            Будь ласка, скористайтеся поштою або зателефонуйте:
          </p>
          <ul>
            <li>
              <p>Телефон:</p>
              <a href="tel:+380680745765">+38 (068) 074-57-65</a>
            </li>
            <li>
              <p>Email:</p>
              <a href="mailto:mistohub@gmail.com">mistohub@gmail.com</a>
            </li>
          </ul>
        </div>
        <div>
          <p>© ГО «МІСТО ХАБ»</p>
          <p>Всі права захищені</p>
          <button type="button" className="developers">
            Розроблено студентами
            <svg className="logoGoIT">
              <use
                width={59}
                height={18}
                xlinkHref={`${sprite}#logoGoIT`}
              ></use>
            </svg>
          </button>
        </div>
      </JoinModalStyled>
    </>
  );
};

export default JoinModal;
