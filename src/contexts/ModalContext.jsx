import { createContext, useState } from 'react';

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState({
    join_modal: false,
    menu_modal: false,
    team_modal: false,
  });

  const openModal = (modalName) => {
    setIsModalOpen((prevState) => ({ ...prevState, [modalName]: true }));
  };

  const closeModal = (modalName) => {
    setIsModalOpen((prevState) => ({ ...prevState, [modalName]: false }));
  };

  return (
    <ModalContext.Provider value={{ isModalOpen, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};
