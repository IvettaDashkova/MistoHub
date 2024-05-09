import { useFormik } from 'formik';
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
    .required(`Номер телефону обов'язковий!`)
    .matches(/^\+380\d{9}$/, 'Невірний формат'),
  link: Yup.string()
    .matches(
      /(https?:\/\/)?(www\.)?(facebook|instagram)\.com\/.+/,
      'Посилання на Facebook або Instagram'
    )
    .url('Невірна адреса'),
  about: Yup.string().max(500, 'Про себе може містити до 500 символів.'),
});

const JoinModal = ({ controlsModal: { isModalOpen, closeModal } }) => {
  const INITIAL_FORM_DATA = {
    name: '',
    lastname: '',
    phone: '',
    link: '',
    about: '',
  };

  const [isDataPosted, setIsDataPosted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const isDesctop = useMediaQuery({ minWidth: 1440 });

  const handleCloseModal = () => {
    setIsError(false);
    setIsLoading(false);
    setIsDataPosted(false);
    closeModal('join_modal');
  };

  const MyHandleChange = (e) => {
    formik.handleChange(e);
    const { name, value } = e.target;

    formik.setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));

    sessionStorage.setItem(
      'formData',
      JSON.stringify({ ...formik.values, [name]: value })
    );
  };

  const handleSubmit = async (values) => {
    const textedData = `<b>Ім’я: ${values.name}</b>\n<b>Прізвище: ${values.lastname}</b>\nТелефон: <b>${values.phone}</b>\nІнстаграм/Фейсбук: <b>${values.link}</b>\nПро себе:${values.about}`;

    try {
      setIsLoading(true);

      const data = await postData(textedData);

      if (data.result.text !== '') {
        setIsDataPosted(true);
        formik.resetForm();
        sessionStorage.removeItem('formData');
      }
    } catch (err) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const formik = useFormik({
    initialValues: sessionStorage.getItem('formData')
      ? JSON.parse(sessionStorage.getItem('formData'))
      : INITIAL_FORM_DATA,
    validateOnBlur: true,
    validateOnChange: true,
    validationSchema: UserDataSchema,
    onSubmit: handleSubmit,
  });

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
      <div>
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
      </div>
      <div className="joinMainContainer">
        <div>
          {!isDataPosted && !isError && (
            <form className="joinForm" onSubmit={formik.handleSubmit}>
              <h2 className="joinTitle">
                Приєднуйся до спільноти <br />
                <span className="joinTitleAccent">супергероїв</span> міста!
              </h2>
              <ul className="joinList">
                <li className="joinFields">
                  <label className="joinLabel" htmlFor="name">
                    Ім’я*
                  </label>
                  <input
                    className={`joinInput ${formik.errors.name && formik.touched.name ? 'errorInput' : ''}`}
                    id="name"
                    name="name"
                    type="text"
                    onBlur={formik.handleBlur}
                    onChange={(e) => {
                      formik.handleChange(e);
                      MyHandleChange(e);
                    }}
                    value={formik.values.name}
                  />
                  {formik.errors.name && formik.touched.name && (
                    <div className="error">{formik.errors.name}</div>
                  )}
                </li>
                <li className="joinFields">
                  <label className="joinLabel" htmlFor="lastname">
                    Прізвище*
                  </label>
                  <input
                    className={`joinInput ${formik.errors.lastname && formik.touched.lastname ? 'errorInput' : ''}`}
                    id="lastname"
                    name="lastname"
                    type="text"
                    onBlur={formik.handleBlur}
                    onChange={(e) => {
                      formik.handleChange(e);
                      MyHandleChange(e);
                    }}
                    value={formik.values.lastname}
                  />
                  {formik.errors.lastname && formik.touched.lastname && (
                    <div className="error">{formik.errors.lastname}</div>
                  )}
                </li>
                <li className="joinFields">
                  <label className="joinLabel" htmlFor="phone">
                    Телефон*
                  </label>
                  <input
                    className={`joinInput ${formik.errors.phone && formik.touched.phone ? 'errorInput' : ''}`}
                    id="phone"
                    name="phone"
                    type="text"
                    placeholder="+380"
                    onBlur={formik.handleBlur}
                    onChange={(e) => {
                      formik.handleChange(e);
                      MyHandleChange(e);
                    }}
                    value={formik.values.phone}
                  />
                  {formik.errors.phone && formik.touched.phone && (
                    <div className="error">{formik.errors.phone}</div>
                  )}
                </li>
                <li className="joinFields">
                  <label className="joinLabel" htmlFor="link">
                    Інстаграм/Фейсбук
                  </label>
                  <input
                    className={`joinInput ${formik.errors.link && formik.touched.link ? 'errorInput' : ''}`}
                    id="link"
                    name="link"
                    type="text"
                    placeholder="Вставити посилання"
                    onBlur={formik.handleBlur}
                    onChange={(e) => {
                      formik.handleChange(e);
                      MyHandleChange(e);
                    }}
                    value={formik.values.link}
                  />
                  {formik.errors.link && formik.touched.link && (
                    <div className="error">{formik.errors.link}</div>
                  )}
                </li>
                <li className="joinFields">
                  <label className="joinLabel" htmlFor="about">
                    Коротко про себе
                  </label>
                  <textarea
                    className={`joinInput ${formik.errors.about && formik.touched.about ? 'errorInput' : ''} area`}
                    id="about"
                    name="about"
                    type="text"
                    onBlur={formik.handleBlur}
                    onChange={(e) => {
                      formik.handleChange(e);
                      MyHandleChange(e);
                    }}
                    value={formik.values.about}
                  ></textarea>
                  {formik.errors.about && formik.touched.about && (
                    <div className="error">{formik.errors.about}</div>
                  )}
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
            </form>
          )}
          {isDataPosted && <PostedBlock handleCloseModal={handleCloseModal} />}
          {isError && <ErrorBlock handleCloseModal={handleCloseModal} />}
        </div>
        {isDesctop && <Maska />}
      </div>
      <Info />
    </JoinModalStyled>
  );
};

export default JoinModal;
