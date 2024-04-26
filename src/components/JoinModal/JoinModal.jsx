import Modal from 'react-modal';
import { useState } from 'react';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

import { ModalJoinStyled } from './JoinModal.styled.jsx';

// Modal.setAppElement('#root');

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
      <Modal
        isOpen={isModalOpen}
        // onRequestClose={() => setIsModalOpen(false)}
      >
        <ModalJoinStyled>
          <p className="joinText">Підтримати проєкт</p>
          <button type="button" onClick={closeModal}>
            x
          </button>
          <Formik
            validationSchema={UserRegisterSchema}
            initialValues={INITIAL_FORM_DATA}
            // onSubmit={handleSubmit}
          >
            <Form>
              <h2>Приєднуйся до спільноти супергероїв міста!</h2>

              <label>
                <span>Ім’я*</span>
                <Field placeholder="name" type="text" name="name" />
                {/* <ErrorMessage
                className={css.errorMsg}
                name="name"
                component="span"
              /> */}
              </label>
              <label>
                <span>Прізвище*</span>
                <Field placeholder="last name" type="text" name="lastname" />
                {/* <ErrorMessage
                className={css.errorMsg}
                name="email"
                component="span"
              /> */}
              </label>
              <label>
                <span>Телефон*</span>
                <Field placeholder="phone number" type="text" name="phone" />
                {/* <ErrorMessage
                className={css.errorMsg}
                name="password"
                component="span"
              /> */}
              </label>
              <label>
                <span>Інстаграм/Фейсбук</span>
                <Field placeholder="link" type="link" name="link" />
                {/* <ErrorMessage
                className={css.errorMsg}
                name="password"
                component="span"
              /> */}
              </label>
              <label>
                <span>Коротко про себе</span>
                <Field
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

              <button
                type="submit"
                title="Click to submit"
                aria-label="Відправити"
              >
                Відправити
              </button>
            </Form>
          </Formik>
          <p>© ГО «МІСТО ХАБ»</p>
          <p>Всі права захищені</p>
          <p>Розроблено студентами </p>
        </ModalJoinStyled>
      </Modal>
    </>
  );
};

export default JoinModal;
