import {
  SocialNetworkLink,
  ListItem,
  PersonDescription,
  PersonImage,
  PersonImageContainer,
  PersonName,
} from './CoFounder.styled';
import Iconsvg from '../../Icon/Icon';
import '../icons.css';

const CoFounder = ({ img, instagram, facebook, name, description }) => {
  return (
    <ListItem>
      <PersonImageContainer>
        <PersonImage src={img} alt="Co-Founder avatar."></PersonImage>
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
