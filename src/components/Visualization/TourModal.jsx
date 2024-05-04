import { forwardRef, useEffect, useCallback, useRef } from 'react';
import { ReactPhotoSphereViewer } from 'react-photo-sphere-viewer';
import Iconsvg from '../Icon/Icon';
import { ModalWrapperTour, CloseButton } from './Visualization.styled';

const TourModal = forwardRef(({ image, onClose }, ref) => {
  const wrapperRef = useRef();

  const closeTourOnClickOutside = useCallback(
    (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        onClose();
      }
    },
    [onClose]
  );

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
        loading="lazy"
      />
      <CloseButton onClick={onClose} type='button'>
        <Iconsvg iconName="icon-closeX" />
      </CloseButton>
    </ModalWrapperTour>
  );
});

TourModal.displayName = 'TourModal';

export default TourModal;
