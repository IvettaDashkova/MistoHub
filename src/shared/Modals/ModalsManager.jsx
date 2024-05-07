import { useModal } from '/src/contexts/ModalHook';

import JoinModal from '/src/shared/Modals/JoinModal/JoinModal';
import BurgerMenu from '../../components/BurgerMenu/BurgerMenu';

const ModalsManager = (props) => {
  const { isModalOpen, closeModal } = useModal();

  const { activeSection } = props;

  return (
    <>
      <JoinModal isModalOpen={isModalOpen} closeModal={closeModal} />
      <BurgerMenu
        activeSection={activeSection}
        isModalOpen={isModalOpen}
        closeModal={closeModal}
      />
    </>
  );
};

export default ModalsManager;
