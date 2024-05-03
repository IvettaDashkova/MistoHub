import { useModal } from '/src/contexts/ModalHook';

import JoinModal from '/src/shared/Modals/JoinModal/JoinModal';

const ModalsManager = () => {
  const { isModalOpen, closeModal } = useModal();

  return (
    <>
      <JoinModal isModalOpen={isModalOpen} closeModal={closeModal} />
    </>
  );
};

export default ModalsManager;
