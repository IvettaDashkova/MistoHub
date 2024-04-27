import {
  PersonDescription,
  PersonImage,
  PersonImageContainer,
  PersonName,
} from './CoFounder.styled';

const CoFounder = ({ img, instagram, name, description }) => {
  return (
    <>
      <PersonImageContainer>
        {/* <img src="" alt="" /> */}
        <PersonImage></PersonImage>
        {/* <svg>
              <use />
            </svg> */}
        {/* <p>INST LINK: {instagram}</p> */}
      </PersonImageContainer>
      <PersonName>{name}</PersonName>
      <PersonDescription>{description}</PersonDescription>
    </>
  );
};

export default CoFounder;
