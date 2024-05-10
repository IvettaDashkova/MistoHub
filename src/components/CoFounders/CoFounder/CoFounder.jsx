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
    webpMobile,
    jpgMobile,
    webpMobileRetina,
    jpgMobileRetina,
    instagram,
    facebook,
    name,
    description,
  },
}) => {
  return (
    <ListItem>
      <PersonImageContainer>
        <picture>
          <source
            srcSet={webpRetina}
            type="image/webp"
            media="(min-width: 768px) and  (min-resolution: 192dpi)"
          />
          <source
            srcSet={jpgRetina}
            type="image/jpg"
            media="(min-width: 768px) and (min-resolution: 192dpi)"
          />
          <source srcSet={webp} type="image/webp" media="(min-width: 768px)" />
          <source srcSet={jpg} type="image/jpg" media="(min-width: 768px)" />

          <source
            srcSet={webpMobileRetina}
            type="image/webp"
            media="(min-resolution: 192dpi)"
          />
          <source
            srcSet={jpgMobileRetina}
            type="image/jpg"
            media="(min-resolution: 192dpi)"
          />
          <source srcSet={webpMobile} type="image/webp" />
          <source srcSet={jpgMobile} type="image/jpg" />

          <PersonImage src={jpgMobile} alt="Co-Founder avatar." />
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
