import CoFounder from './CoFounder/CoFounder';
import {
  List,
  ListItem,
  SectionContainer,
  SectionSpan,
  SectionTitle,
} from './CoFounders.styled';
const CoFounders = () => {
  return (
    <SectionContainer>
      <SectionTitle>
        Співзасновники <br />
        <SectionSpan>містохаб</SectionSpan>
      </SectionTitle>
      <List>
        <ListItem>
          <CoFounder
            img={'Person Image'}
            instagram={'Some LInk'}
            name={'Альона Гончаренко'}
            description={
              'Керівниця центру підтримки підприємців "Дія.Бізнес" Полтава'
            }
          />
        </ListItem>
        <ListItem>
          <CoFounder
            img={'Person Image'}
            instagram={'Some LInk'}
            name={'Альона Гончаренко'}
            description={
              'Керівниця центру підтримки підприємців "Дія.Бізнес" Полтава'
            }
          />
        </ListItem>
        <ListItem>
          <CoFounder
            img={'Person Image'}
            instagram={'Some LInk'}
            name={'Альона Гончаренко'}
            description={
              'Керівниця центру підтримки підприємців "Дія.Бізнес" Полтава'
            }
          />
        </ListItem>
        <ListItem>
          <CoFounder
            img={'Person Image'}
            instagram={'Some LInk'}
            name={'Альона Гончаренко'}
            description={
              'Керівниця центру підтримки підприємців "Дія.Бізнес" Полтава'
            }
          />
        </ListItem>
        <ListItem>
          <CoFounder
            img={'Person Image'}
            instagram={'Some LInk'}
            name={'Альона Гончаренко'}
            description={
              'Керівниця центру підтримки підприємців "Дія.Бізнес" Полтава'
            }
          />
        </ListItem>
        <ListItem>
          <CoFounder
            img={'Person Image'}
            instagram={'Some LInk'}
            name={'Альона Гончаренко'}
            description={
              'Керівниця центру підтримки підприємців "Дія.Бізнес" Полтава'
            }
          />
        </ListItem>
        <ListItem>
          <CoFounder
            img={'Person Image'}
            instagram={'Some LInk'}
            name={'Альона Гончаренко'}
            description={
              'Керівниця центру підтримки підприємців "Дія.Бізнес" Полтава'
            }
          />
        </ListItem>
      </List>
    </SectionContainer>
  );
};

export default CoFounders;
