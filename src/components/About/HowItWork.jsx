import {
  HowItWorkSection,
  HowItWorkTitle,
  HowItWorkList,
  HowItWorkItem,
  HowItWorkNumber,
  HowItWorkItemText,
  HowItWorkAccent,
  HowItWorkButton,
} from './HowItWork.styled';

const HowItWork = () => {
  return (
    <HowItWorkSection>
      <HowItWorkTitle>Як це працює?</HowItWorkTitle>
      <HowItWorkList>
        <HowItWorkItem>
          <HowItWorkNumber>1</HowItWorkNumber>
          <HowItWorkItemText>
            Люди і компанії вкладають кошти у відновлення історичної будівлі{' '}
            <HowItWorkAccent>МІСТОХАБ</HowItWorkAccent>
          </HowItWorkItemText>
        </HowItWorkItem>
        <HowItWorkItem>
          <HowItWorkNumber>2</HowItWorkNumber>
          <HowItWorkItemText>
            У відновленій будівлі відкривається МІСТОХАБ в якому функціонують:{' '}
            <HowItWorkAccent>
              Кафе, Крамниця локальних виробників Містошоп, Івент-простір
            </HowItWorkAccent>{' '}
            та генерують прибуток
          </HowItWorkItemText>
        </HowItWorkItem>
        <HowItWorkItem>
          <HowItWorkNumber>3</HowItWorkNumber>
          <HowItWorkItemText>
            80% прибутку передається у Фонд міських ініціатив{' '}
            <HowItWorkAccent>МІСТОХАБу</HowItWorkAccent>
          </HowItWorkItemText>
        </HowItWorkItem>
        <HowItWorkItem>
          <HowItWorkNumber>4</HowItWorkNumber>
          <HowItWorkItemText>
            <HowItWorkAccent>Фонд міських ініціатив</HowItWorkAccent> оголошує
            конкурс проєктів містян, a імпакт-інвестори обирають найкращі ідеї
          </HowItWorkItemText>
        </HowItWorkItem>
        <HowItWorkItem>
          <HowItWorkNumber>5</HowItWorkNumber>
          <HowItWorkItemText>
            <HowItWorkAccent>Фонд міських ініціатив</HowItWorkAccent> фінансує
            проєкти переможців
          </HowItWorkItemText>
        </HowItWorkItem>
      </HowItWorkList>
      <HowItWorkButton type="button">Приєднатися</HowItWorkButton>
    </HowItWorkSection>
  );
};

export default HowItWork;
