import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useState } from 'react';
import { useEffect } from 'react';
import * as Yup from 'yup';

import { useModal } from '/src/contexts/ModalHook';
import { postData } from '/src/services/API.js';
import useWindowWidth from '/src/contexts/WindowWidth';
import { JoinModalStyled } from './JoinModal.styled.jsx';
import Icon from '../Icon/Icon.jsx';
import Maska from './Maska.jsx';
import Info from './Info.jsx';

import { nanoid } from 'nanoid';

const UserDataSchema = Yup.object().shape({
  name: Yup.string()
    .required('User name is required!')
    .min(2, 'User name must be at least 2 characters!')
    .max(50, 'User name must be less than 50 characters!'),
  lastname: Yup.string()
    .required('User lastname is required!')
    .min(2, 'User name must be at least 2 characters!')
    .max(50, 'User name must be less than 50 characters!'),
  phone: Yup.string()
    .required('Phone number is required!')
    .matches(/^\+3\(\d{3}\)\d{7}$/, 'Invalid phone number format'),
  link: Yup.string().url('Invalid URL'),
  about: Yup.string().max(500, 'About must be less than 500 characters'),
});

const JoinModal = () => {
  const windowWidth = useWindowWidth();
  const { isModalOpen, openModal, closeModal } = useModal();

  const [userData, setUserData] = useState(null);
  const [isDataPosted, setIsDataPosted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const INITIAL_FORM_DATA = {
    name: '',
    lastname: '',
    phone: '',
    link: '',
    about: '',
  };

  useEffect(() => {
    console.log(userData);
    if (!userData || userData === null) {
      setIsLoading(false);
      setIsError(false);
      setIsDataPosted(false);
      return;
    }

    async function postUserData() {
      try {
        setIsLoading(true);
        setIsError(false);

        const textedData = `${userData.name} ${userData.lastname} ${userData.phone} ${userData.link} ${userData.about}`;

        const data = await postData(textedData);
        console.log(data);
        console.log(data.result.text);

        if (data.result.text !== '') {
          console.log('well done');
        }
        setIsDataPosted(true);
        // setUserData(null);
      } catch (err) {
        setIsError(true);
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    }

    postUserData();
  }, [userData]);

  const handleSubmit = (values, formActions) => {
    const userData = { ...values, id: nanoid() };
    console.log(userData);
    setUserData(userData);
    formActions.resetForm();
  };

  const handleCloseModal = () => {
    setIsError(false);
    setIsLoading(false);
    setIsDataPosted(false);
    setUserData(null);
    closeModal();
  };

  return (
    <>
      <button type="button" onClick={openModal}>
        Open Modal
      </button>

      <JoinModalStyled isOpen={isModalOpen} onRequestClose={handleCloseModal}>
        <p>Підтримати проєкт</p>
        <button
          className="joinCloseBtn"
          type="button"
          onClick={handleCloseModal}
        >
          <span className="joinCloseText">Закрити</span>
          <Icon iconName="close" />
        </button>
        <div className="joinMainContainer">
          <div>
            {!isDataPosted && !isError && (
              <Formik
                validationSchema={UserDataSchema}
                initialValues={INITIAL_FORM_DATA}
                onSubmit={handleSubmit}
              >
                <Form className="joinForm">
                  <h2 className="joinTitle">
                    Приєднуйся до спільноти <br />
                    <span className="joinTitleAccent">супергероїв</span> міста!
                  </h2>

                  <ul className="joinList">
                    <li>
                      <label className="joinLabel">
                        <span>Ім’я*</span>
                        <Field className="joinInput" type="text" name="name" />
                        <ErrorMessage
                          className="error"
                          name="name"
                          component="span"
                        />
                      </label>
                    </li>
                    <li>
                      <label className="joinLabel">
                        <span>Прізвище*</span>
                        <Field
                          className="joinInput"
                          type="text"
                          name="lastname"
                        />
                        <ErrorMessage
                          className="error"
                          name="lastname"
                          component="span"
                        />
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
                        <ErrorMessage
                          className="error"
                          name="phone"
                          component="span"
                        />
                      </label>
                    </li>
                    <li>
                      <label className="joinLabel">
                        <span>Інстаграм/Фейсбук</span>
                        <Field
                          className="joinInput"
                          placeholder="Вставити посилання"
                          type="link"
                          name="link"
                        />
                        <ErrorMessage
                          className="error"
                          name="link"
                          component="span"
                        />
                      </label>
                    </li>
                    <li>
                      <label className="joinLabel">
                        <span>Коротко про себе</span>
                        <Field
                          as="textarea"
                          className="joinInput"
                          type="text"
                          name="about"
                        />
                        <ErrorMessage
                          className="error"
                          name="about"
                          component="span"
                        />
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

                  {isLoading && <p>Loading data, please wait...</p>}
                </Form>
              </Formik>
            )}
            {isDataPosted && (
              <div className="joinSucccess">
                <h2 className="joinTitle">
                  Дякуємо за перший крок до змін Полтави! Ваші дані успішно
                  <span className="joinTitleAccent"> відправлені!</span>
                </h2>
                <p className="joinText">
                  Протягом доби звʼяжемось з вами для обговорення подальших
                  етапів.
                </p>
                <button
                  className="joinSuccessBtn"
                  type="button"
                  onClick={handleCloseModal}
                >
                  На сторінку
                </button>
              </div>
            )}
            {isError && (
              <div className="joinError">
                <h2 className="joinTitle">
                  На жаль, зараз{' '}
                  <span className="joinTitleAccent ">сервіс</span> не відповідає
                  &#58;&#40;
                </h2>
                <p className="joinText">
                  Будь ласка, скористайтеся поштою або зателефонуйте{' '}
                  <Icon iconName="heart" />
                </p>
                <ul className="joinContacts">
                  <li>
                    <p>Телефон:</p>
                    <a className="joinItemContact" href="tel:+380680745765">
                      +38 (068) 074-57-65
                    </a>
                  </li>
                  <li>
                    <p>Email:</p>
                    <a
                      className="joinItemContact"
                      href="mailto:mistohub@gmail.com"
                    >
                      mistohub@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
          {windowWidth >= 1440 ? <Maska /> : null}
        </div>
        <Info />
      </JoinModalStyled>
    </>
  );
};

export default JoinModal;
