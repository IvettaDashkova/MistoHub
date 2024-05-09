import { forwardRef, useEffect, useCallback, useRef, useState } from 'react';
import { ReactPhotoSphereViewer } from 'react-photo-sphere-viewer';
import Iconsvg from '../Icon/Icon';
import {
  ModalWrapperTour,
  CloseButton,
  Performance,
} from './Visualization.styled';
import { useMediaQuery } from 'react-responsive';

const TourModal = forwardRef(({ image, onClose }, ref) => {
  const wrapperRef = useRef();
  const [showPerformance, setShowPerformance] = useState(true);

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

  const isDesktop = useMediaQuery({ minWidth: 1440 });

  const handleEvent = (e) => {
    e.stopPropagation();
    setShowPerformance(false);
  };

  return (
    <ModalWrapperTour
      ref={wrapperRef}
      onClick={handleEvent}
      onTouchStart={handleEvent}
    >
      <ReactPhotoSphereViewer
        ref={ref}
        src={image}
        hideNavbarButton={!isDesktop}
        height={'100%'}
        width={'100%'}
        defaultZoomLvl={10}
        navbar={isDesktop ? ['zoom', 'fullscreen'] : false}
        loading="lazy"
      />
      {!isDesktop && showPerformance && (
        <Performance
          onTouchStart={(e) => {
            e.stopPropagation();
            setShowPerformance(false);
          }}
        >
          <Iconsvg
            width="40"
            height="40"
            styles="icon-performance"
            iconName="arrows-top"
          />
          <Iconsvg
            width="40"
            height="40"
            styles="icon-performance"
            iconName="arrows-bottom"
          />
        </Performance>
      )}
      <CloseButton onClick={onClose} type="button">
        <Iconsvg iconName="icon-closeX" />
      </CloseButton>
    </ModalWrapperTour>
  );
});

TourModal.displayName = 'TourModal';

export default TourModal;
