import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useState } from 'react';
import { useEffect } from 'react';
import * as Yup from 'yup';
import { useMediaQuery } from 'react-responsive';

import { useModal } from '/src/contexts/ModalHook';
import { postData } from '/src/services/API.js';

import { JoinModalStyled } from './JoinModal.styled.jsx';
import Icon from '/src/components/Icon/Icon';
import Maska from '/src/components/JoinModal/Maska';
import Info from '/src/components/JoinModal/Info';
import ErrorBlock from './ErrorBlock.jsx';
import PostedBlock from './PostedBlock.jsx';

const UserDataSchema = Yup.object().shape({
  name: Yup.string()
    .required(`Ім'я обов'язкове для заповнення!`)
    .min(2, `Ім'я має бути мінімум 2 символи!`)
    .max(50, `Ім'я занадто довге!`),
  lastname: Yup.string()
    .required(`Прізвище обов'язкове для заповнення!`)
    .min(2, 'Прізвище має бути мінімум 2 символи!')
    .max(50, `Прізвище занадто довге!`),
  phone: Yup.string()
    .required(`Номер телефону обов'язковий для заповнення!`)
    .matches(/^\+3\d{11}$/, 'Невірний формат'),
  link: Yup.string().url('Невірна адреса'),
  about: Yup.string().max(500, 'Про себе може містити до 500 символів.'),
});

const JoinModal = () => {
  const { isModalOpen, openModal, closeModal } = useModal();

  const [userData, setUserData] = useState(null);
  const [isDataPosted, setIsDataPosted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const isDesctopMax = useMediaQuery({ minWidth: 1440 });

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
    const userData = { ...values };
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

      <JoinModalStyled
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        style={{ overlay: { zIndex: '2' } }}
        bodyOpenClassName="modal-open"
      >
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
                {({ errors, touched }) => (
                  <Form className="joinForm">
                    <h2 className="joinTitle">
                      Приєднуйся до спільноти <br />
                      <span className="joinTitleAccent">супергероїв</span>{' '}
                      міста!
                    </h2>

                    <ul className="joinList">
                      <li>
                        <label className="joinLabel">
                          <span>Ім’я*</span>
                          <Field
                            className={`joinInput ${errors.name && touched.name ? 'errorInput' : ''}`}
                            type="text"
                            name="name"
                          />
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
                            className={`joinInput ${errors.lastname && touched.lastname ? 'errorInput' : ''}`}
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
                            className={`joinInput ${errors.phone && touched.phone ? 'errorInput' : ''}`}
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
                            className={`joinInput ${errors.link && touched.link ? 'errorInput' : ''}`}
                            placeholder="Вставити посилання"
                            type="text"
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
                            className={`joinInput ${errors.about && touched.about ? 'errorInput' : ''}`}
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
                )}
              </Formik>
            )}
            {isDataPosted && (
              <PostedBlock handleCloseModal={handleCloseModal} />
            )}
            {isError && <ErrorBlock />}
          </div>
          {isDesctopMax && <Maska />}
        </div>
        <Info />
      </JoinModalStyled>
    </>
  );
};

export default JoinModal;
