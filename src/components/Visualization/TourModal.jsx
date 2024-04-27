import { forwardRef, useEffect, useCallback, useRef } from 'react';
import { ReactPhotoSphereViewer } from 'react-photo-sphere-viewer';
import styled from 'styled-components';
import Icon from './Icon';

const ModalWrapper = styled.div`
  borderRadius: '20px'
  position: relative;
  width: 100%;
  height: 100%;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

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
    <ModalWrapper ref={wrapperRef}>
      <ReactPhotoSphereViewer
        ref={ref}
        src={image}
        hideNavbarButton={false}
        height={'100%'}
        width={'100%'}
        defaultZoomLvl={10}
        navbar={true}
      />
      <CloseButton onClick={onClose}>
        <Icon
          width="18"
          height="18"
          iconName="icon-closeX"
          // fill="#ffffff"
          stroke="#ffffff"
        />
      </CloseButton>
    </ModalWrapper>
  );
});

TourModal.displayName = 'TourModal';

export default TourModal;

/**============================================= */

// import { forwardRef, useEffect, useCallback, useRef } from 'react';
// import { ReactPhotoSphereViewer } from 'react-photo-sphere-viewer';
// import styled from 'styled-components';
// import Icon from './Icon';

// const ModalWrapper = styled.div`
//   position: relative;
//   width: 100%;
//   height: 100%;
// `;

// const CloseButton = styled.button`
//   position: absolute;
//   top: 10px;
//   right: 10px;
//   background-color: transparent;
//   border: none;
//   border-radius: 50%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   cursor: pointer;
// `;

// const TourModal = forwardRef(({ image, onClose }, ref) => {
//   const wrapperRef = useRef();

//   const closeTourOnClickOutside = useCallback(
//     (event) => {
//       if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
//         onClose();
//       }
//     },
//     [onClose]
//   );

//   useEffect(() => {
//     document.addEventListener('mousedown', closeTourOnClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', closeTourOnClickOutside);
//     };
//   }, [closeTourOnClickOutside]);

//   const iconStyles = {
//     fill: 'red',
//     stroke: '#ffffff',
//   };

//   return (
//     <ModalWrapper ref={wrapperRef}>
//       <ReactPhotoSphereViewer
//         ref={ref}
//         src={image}
//         hideNavbarButton={false}
//         height={'100%'}
//         width={'100%'}
//         defaultZoomLvl={10}
//         navbar={true}
//       />
//       <CloseButton onClick={onClose}>
//         X{' '}
//         <Icon
//           width="150"
//           height="150"
//           iconName="icon-arrow-left"
//           style={iconStyles}
//         />
//       </CloseButton>
//     </ModalWrapper>
//   );
// });

// TourModal.displayName = 'TourModal';

// export default TourModal;