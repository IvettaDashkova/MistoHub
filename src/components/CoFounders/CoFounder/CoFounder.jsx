import {
  SocialNetworkLink,
  ListItem,
  PersonDescription,
  PersonImage,
  PersonImageContainer,
  PersonName,
} from './CoFounder.styled';
import Iconsvg from '../../Icon/Icon';

const CoFounder = ({ webp, jpg, instagram, facebook, name, description }) => {
  return (
    <ListItem>
      <PersonImageContainer>
        <picture>
          {/* WebP image */}
          <source srcSet={webp} type="image/webp" />
          {/* JPEG 2x image */}
          {/* Fallback for older browsers */}
          <PersonImage src={jpg} alt="Co-Founder avatar." />
        </picture>
        {instagram !== null ? (
          <SocialNetworkLink href={instagram} target="blank">
            <Iconsvg
              iconName="instagramIcon"
              styles="socialNetworkIcon"
            ></Iconsvg>
          </SocialNetworkLink>
        ) : (
          <SocialNetworkLink href={facebook} target="blank">
            <Iconsvg
              iconName="facebookIcon"
              styles="socialNetworkIcon"
            ></Iconsvg>
          </SocialNetworkLink>
        )}
      </PersonImageContainer>

      <PersonName>{name}</PersonName>
      <PersonDescription>{description}</PersonDescription>
    </ListItem>
  );
};

export default CoFounder;
