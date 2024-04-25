import {
  HowItWorkSection,
  HowItWorkList,
  HowItWorkItem,
  HowItWorkNumber,
  HowItWorkItemText,
} from './HowItWork.styled';

const HowItWork = () => {
  return (
    <HowItWorkSection>
      <h2 className='how-it-work-title'>Як це працює?</h2>
      <HowItWorkList>
        <HowItWorkItem>
          <HowItWorkNumber>1</HowItWorkNumber>
          <HowItWorkItemText>
            Люди і компанії вкладають кошти у відновлення історичної будівлі <span className='accent'>МІСТОХАБ</span>
          </HowItWorkItemText>
        </HowItWorkItem>
        <HowItWorkItem>
          <HowItWorkNumber>2</HowItWorkNumber>
          <HowItWorkItemText>
            У відновленій будівлі відкривається МІСТОХАБ в якому функціонують: <span className='accent'>
              Кафе, Крамниця локальних виробників Містошоп, Івент-простір
            </span> та генерують прибуток
          </HowItWorkItemText>
        </HowItWorkItem>
        <HowItWorkItem>
          <HowItWorkNumber>3</HowItWorkNumber>
          <HowItWorkItemText>
            80% прибутку передається у Фонд міських ініціатив <span className='accent'>МІСТОХАБу</span>
          </HowItWorkItemText>
        </HowItWorkItem>
        <HowItWorkItem>
          <HowItWorkNumber>4</HowItWorkNumber>
          <HowItWorkItemText>
            <span className='accent'>Фонд міських ініціатив</span> оголошує
            конкурс проєктів містян, a імпакт-інвестори обирають найкращі ідеї
          </HowItWorkItemText>
        </HowItWorkItem>
        <HowItWorkItem>
          <HowItWorkNumber>5</HowItWorkNumber>
          <HowItWorkItemText>
            <span className='accent'>Фонд міських ініціатив</span> фінансує
            проєкти переможців
          </HowItWorkItemText>
        </HowItWorkItem>
      </HowItWorkList>
      <button className="how-it-work-btn" type="button">Приєднатися</button>
    </HowItWorkSection>
  );
};

export default HowItWork;
