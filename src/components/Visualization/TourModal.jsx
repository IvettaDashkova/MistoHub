import { forwardRef, useEffect, useCallback, useRef } from 'react';
import { ReactPhotoSphereViewer } from 'react-photo-sphere-viewer';
import Icon from './Icon';
import { ModalWrapperTour, CloseButton } from './StyledComponents';

const TourModal = forwardRef(({ image, onClose }, ref) => {
  const wrapperRef = useRef();
  //  закриття туру при кліку поза його межами
  const closeTourOnClickOutside = useCallback(
    (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        onClose();
      }
    },
    [onClose]
  );
  // обробник події при створенні та демонтуванні компонента
  useEffect(() => {
    document.addEventListener('mousedown', closeTourOnClickOutside);
    return () => {
      document.removeEventListener('mousedown', closeTourOnClickOutside);
    };
  }, [closeTourOnClickOutside]);

  return (
    <ModalWrapperTour ref={wrapperRef}>
      <ReactPhotoSphereViewer
        ref={ref}
        src={image}
        hideNavbarButton={false}
        height={'100%'}
        width={'100%'}
        defaultZoomLvl={10}
        navbar={true}
        // style={{ cursor: `grab` }}
      />
      <CloseButton onClick={onClose}>
        <Icon width="18" height="18" iconName="icon-closeX" />
      </CloseButton>
    </ModalWrapperTour>
  );
});

TourModal.displayName = 'TourModal';

export default TourModal;
