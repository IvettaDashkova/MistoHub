import { NeedToDoItem } from './ZibraniKoshti.styled';

export const NeedToDoCards = () => {
  const tasks = [
    'Закупівля й встановлення меблів, обладнання для кухні та сантехніки для вбиралень',
    'Встановлення системи кондиціонування',
    'Освітлення простору',
  ];
  return tasks.map((task, i) => (
    <NeedToDoItem key={i}>
      <h4>Залишилось зробити</h4>
      <p>{task}</p>
    </NeedToDoItem>
  ));
};
