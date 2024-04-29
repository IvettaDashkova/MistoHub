import { forwardRef, useEffect, useCallback, useRef } from 'react';
import { ReactPhotoSphereViewer } from 'react-photo-sphere-viewer';
import styled from 'styled-components';
import Icon from './Icon';

const ModalWrapperTour = styled.div`
  border-radius: 20px;
  overflow: hidden;
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
  stroke: #ffffff;
`;

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
      />
      <CloseButton onClick={onClose}>
        <Icon width="16" height="16" iconName="icon-closeX" />
      </CloseButton>
    </ModalWrapperTour>
  );
});

TourModal.displayName = 'TourModal';

export default TourModal;

/**================проба=зробити=нав=бар====================== */

// import { forwardRef, useEffect, useCallback, useRef } from 'react';
// import { ReactPhotoSphereViewer } from 'react-photo-sphere-viewer';
// import styled from 'styled-components';
// import Icon from './Icon';

// const ModalWrapperTour = styled.div`
//   border-radius: 20px;
//   overflow: hidden;
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
//   stroke: #ffffff;
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

//   const handleZoomIn = useCallback((viewer) => {
//     viewer.zoom(0.1);
//   }, []);

//   const handleZoomOut = useCallback((viewer) => {
//     viewer.zoom(-0.1);
//   }, []);

//   const handleFullscreen = useCallback((viewer) => {
//     viewer.toggleFullscreen();
//   }, []);

//   return (
//     <ModalWrapperTour ref={wrapperRef}>
//       <ReactPhotoSphereViewer
//         ref={ref}
//         src={image}
//         hideNavbarButton={false}
//         height={'100%'}
//         width={'100%'}
//         defaultZoomLvl={10}
//         navbar={false}
//         style={{ width: '100%', height: '500px' }}
//         onReady={(viewer) => {
//           const navbar = document.createElement('div');
//           navbar.style.position = 'absolute';
//           navbar.style.bottom = '10px';
//           navbar.style.left = '50%';
//           navbar.style.transform = 'translateX(-50%)';
//           navbar.style.textAlign = 'center';
//           navbar.style.color = 'white';

//           const createButton = (text, handler) => {
//             const button = document.createElement('button');
//             button.style.margin = '10px';
//             button.style.fontSize = '20px';
//             button.style.background = 'none';
//             button.style.border = 'none';
//             button.style.color = 'white';
//             button.textContent = text;
//             button.addEventListener('click', () => handler(viewer));
//             return button;
//           };

//           navbar.appendChild(createButton('+', handleZoomIn));
//           navbar.appendChild(createButton('-', handleZoomOut));
//           navbar.appendChild(createButton('Fullscreen', handleFullscreen));

//           viewer.container.appendChild(navbar);
//         }}
//       />
//       <CloseButton onClick={onClose}>
//         <Icon width="16" height="16" iconName="icon-closeX" />
//       </CloseButton>
//     </ModalWrapperTour>
//   );
// });

// TourModal.displayName = 'TourModal';

// export default TourModal;
/**================проба=зробити=нав=бар====================== */


/**================проба=зробити=нав=бар====================== */
// import { forwardRef, useEffect, useCallback, useRef, useState } from 'react';
// import { ReactPhotoSphereViewer } from 'react-photo-sphere-viewer';
// import styled from 'styled-components';
// import Icon from './Icon';

// const ModalWrapperTour = styled.div`
//   border-radius: 20px;
//   overflow: hidden;
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
//   stroke: #ffffff;
// `;

// const CustomNavbar = styled.div`
//   position: absolute;
//   bottom: 0;
//   width: 100%;
//   display: flex;
//   justify-content: center;
//   background-color: rgba(0, 0, 0, 0);
// `;

// const NavbarButton = styled.button`
//   margin: 10px;
//   padding: 10px;
//   background-color: white;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
// `;

// const TourModal = forwardRef(({ image, onClose }, ref) => {
//   const [viewer, setViewer] = useState(null);
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

//   useEffect(() => {
//     if (ref.current) {
//       setViewer(ref.current);
//     }
//   }, [ref]);

//   const zoomIn = () => {
//     if (viewer) {
//       viewer.zoomIn();
//     } else {
//       console.warn('Viewer is not available');
//     }
//   };

//   const zoomOut = () => {
//     if (viewer) {
//       viewer.zoomOut();
//     } else {
//       console.warn('Viewer is not available');
//     }
//   };

//   const toggleFullscreen = () => {
//     if (viewer) {
//       viewer.toggleFullscreen();
//     } else {
//       console.warn('Viewer is not available');
//     }
//   };

//   return (
//     <ModalWrapperTour ref={wrapperRef}>
//       <ReactPhotoSphereViewer
//         ref={ref}
//         src={image}
//         hideNavbarButton={false}
//         height={'100%'}
//         width={'100%'}
//         defaultZoomLvl={10}
//         // navbar={true}
//         navbar={false}
//       />
//       <CustomNavbar>
//         <NavbarButton onClick={zoomIn}>Збільшити</NavbarButton>
//         <NavbarButton onClick={zoomOut}>Зменшити</NavbarButton>
//         <NavbarButton onClick={toggleFullscreen}>На весь екран</NavbarButton>
//       </CustomNavbar>
//       <CloseButton onClick={onClose}>
//         <Icon width="16" height="16" iconName="icon-closeX" />
//       </CloseButton>
//     </ModalWrapperTour>
//   );
// });

// TourModal.displayName = 'TourModal';

// export default TourModal;

/**================проба=зробити=нав=бар=2===================== */

// import { forwardRef, useEffect, useCallback, useRef, useState } from 'react';
// import { ReactPhotoSphereViewer } from 'react-photo-sphere-viewer';
// import styled from 'styled-components';
// import Icon from './Icon';

// const ModalWrapperTour = styled.div`
//   border-radius: 20px;
//   overflow: hidden;
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
//   stroke: #ffffff;
// `;

// const TourModal = forwardRef(({ image, onClose }, ref) => {
//   const [viewer, setViewer] = useState(null);
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

//   useEffect(() => {
//     if (ref.current) {
//       setViewer(ref.current);
//     }
//   }, [ref]);

//   const zoomIn = () => {
//     if (viewer) {
//       viewer.zoomIn();
//     } else {
//       console.warn('Viewer is not available');
//     }
//   };

//   const zoomOut = () => {
//     if (viewer) {
//       viewer.zoomOut();
//     } else {
//       console.warn('Viewer is not available');
//     }
//   };

//   const toggleFullscreen = () => {
//     if (viewer) {
//       viewer.toggleFullscreen();
//     } else {
//       console.warn('Viewer is not available');
//     }
//   };

//   return (
//     <ModalWrapperTour ref={wrapperRef}>
//       <ReactPhotoSphereViewer
//         ref={ref}
//         src={image}
//         hideNavbarButton={false}
//         height={'100%'}
//         width={'100%'}
//         defaultZoomLvl={10}
//         navbar={[
//           {
//             id: 'zoomIn',
//             content: 'Збільшити',
//             className: 'custom-button',
//             style: {
//               backgroundColor: 'white',
//               borderRadius: '5px',
//               cursor: 'pointer',
//               margin: '10px',
//               padding: '10px',
//             },
//             onClick: zoomIn,
//           },
//           {
//             id: 'zoomOut',
//             content: 'Зменшити',
//             className: 'custom-button',
//             style: {
//               backgroundColor: 'white',
//               borderRadius: '5px',
//               cursor: 'pointer',
//               margin: '10px',
//               padding: '10px',
//             },
//             onClick: zoomOut,
//           },
//           {
//             id: 'fullscreen',
//             content: 'На весь екран',
//             className: 'custom-button',
//             style: {
//               backgroundColor: 'white',
//               borderRadius: '5px',
//               // cursor: 'pointer',
//               cursor: 'grab',
//               margin: '10px',
//               padding: '10px',
//             },
//             onClick: toggleFullscreen,
//           },
//         ]}
//       />
//       <CloseButton onClick={onClose}>
//         <Icon width="16" height="16" iconName="icon-closeX" />
//       </CloseButton>
//     </ModalWrapperTour>
//   );
// });

// TourModal.displayName = 'TourModal';

// export default TourModal;
