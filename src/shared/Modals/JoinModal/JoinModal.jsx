import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useMediaQuery } from 'react-responsive';
import { useState } from 'react';
import * as Yup from 'yup';

import { postData } from '/src/services/API.js';

import { JoinModalStyled } from '/src/shared/Modals/JoinModal/JoinModal.styled';
import ErrorBlock from '/src/shared/Modals/JoinModal/ErrorBlock';
import PostedBlock from '/src/shared/Modals/JoinModal/PostedBlock';
import Icon from '/src/components/Icon/Icon';
import Maska from '/src/shared/Modals/JoinModal/Maska';
import Info from '/src/shared/Modals/JoinModal/Info';
import Loader from '/src/components/Loader/Loader';
import { useModal } from '/src/contexts/ModalHook';

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
  const [isDataPosted, setIsDataPosted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const { isModalOpen, closeModal } = useModal();
  const isDesctop = useMediaQuery({ minWidth: 1440 });

  const INITIAL_FORM_DATA = {
    name: '',
    lastname: '',
    phone: '',
    link: '',
    about: '',
  };

  const handleCloseModal = () => {
    setIsError(false);
    setIsLoading(false);
    setIsDataPosted(false);
    closeModal('join_modal');
  };

  const handleSubmit = async (values, formActions) => {
    const textedData = `<b>Ім’я: ${values.name}</b>\n<b>Прізвище: ${values.lastname}</b>\nТелефон: <b>${values.phone}</b>\nІнстаграм/Фейсбук: <b>${values.link}</b>\nПро себе:${values.about}`;
    formActions.resetForm();

    try {
      setIsLoading(true);

      const data = await postData(textedData);

      if (data.result.text !== '') {
        setIsDataPosted(true);
      }
    } catch (err) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <JoinModalStyled
      isOpen={isModalOpen.join_modal}
      onRequestClose={handleCloseModal}
      style={{ overlay: { zIndex: '101' } }}
      bodyOpenClassName="modal-open"
    >
      {isLoading && (
        <Loader
          style={{
            display: 'block',
            overlay: { zIndex: '999' },
            width: '100vw',
            height: '100vh',
          }}
        />
      )}
      <p>Підтримати проєкт</p>
      <button
        className="joinCloseBtn"
        type="button"
        title="Закрити вікно"
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
                    <span className="joinTitleAccent">супергероїв</span> міста!
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
                    title="Відправити дані"
                    aria-label="Відправити"
                  >
                    Відправити
                  </button>
                </Form>
              )}
            </Formik>
          )}
          {isDataPosted && <PostedBlock handleCloseModal={handleCloseModal} />}
          {isError && <ErrorBlock />}
        </div>
        {isDesctop && <Maska />}
      </div>
      <Info />
    </JoinModalStyled>
  );
};

export default JoinModal;
