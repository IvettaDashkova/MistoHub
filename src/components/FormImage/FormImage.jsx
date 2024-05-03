import React from 'react';
import { Container, Image } from './FormImage.styled';
import kitchenImage from '../../assets/img/kitchen.jpg';


const FormImage = () => {
  return (
    <Container>
 
        <Image src={kitchenImage} />
       
    </Container>
  );
};

export default FormImage;