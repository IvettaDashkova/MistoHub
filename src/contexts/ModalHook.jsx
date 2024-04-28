import { useContext } from 'react';
import { ModalContext } from './ModalContext';

export const useModal = () => {
  return useContext(ModalContext);
};
