import { useRef } from 'react';
import { motion } from 'framer-motion';
import {
  ReactPhotoSphereViewer,
} from 'react-photo-sphere-viewer';
import '@photo-sphere-viewer/markers-plugin/index.css';
import testImg from './test.jpg';

const VirtualTour = () => {
  const photoSphereRef = useRef();

  return (
    <motion.div
      animate={{
        y: ['300%', '0%'],
      }}
      transition={{
        duration: 3,
      }}
    >
      <ReactPhotoSphereViewer
        ref={photoSphereRef}
        src={testImg}
        hideNavbarButton={true}
        height={'400px'}
        width={'400px'}
        defaultZoomLvl={10}
        navbar={true}
      />
    </motion.div>
  );
};

export default VirtualTour;
