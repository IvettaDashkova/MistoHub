import {
  SocialNetworkLink,
  ListItem,
  PersonDescription,
  PersonImage,
  PersonImageContainer,
  PersonName,
} from './CoFounder.styled';
import Iconsvg from '../../Icon/Icon';

const CoFounder = ({
  person: {
    webp,
    jpg,
    webpRetina,
    jpgRetina,
    instagram,
    facebook,
    name,
    description,
  },
}) => {
  return (
    <ListItem>
      <PersonImageContainer>
        <PersonImage>
          <source srcSet={webpRetina} type="image/webp" />

          <source
            srcSet={jpgRetina}
            type="image/jpg"
            alt="Co-Founder avatar."
          />
          <source srcSet={webp} type="image/webp" />
          <source srcSet={jpg} type="image/jpg" alt="Co-Founder avatar." />
          <img src={jpg} />
        </PersonImage>
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
