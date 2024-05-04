import Iconsvg from '../../Icon/Icon';

import { BackgroundVectorsContainer } from './BackgroundVectors.styled';

const BackgroundVectors = () => {
  return (
    <BackgroundVectorsContainer>
      <Iconsvg iconName="zigzagIcon" styles="zigzagIcon" />
      <Iconsvg iconName="octagonIcon" styles="octagonIcon" />
      <Iconsvg iconName="ovalIcon" styles="ovalIcon" />
      <Iconsvg iconName="blobIcon" styles="blobIcon" />
      <Iconsvg iconName="sliceIcon" styles="sliceIcon" />
      <Iconsvg iconName="treeIcon" styles="treeIcon" />
    </BackgroundVectorsContainer>
  );
};

export default BackgroundVectors;
