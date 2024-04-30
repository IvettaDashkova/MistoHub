import { NeedToDoItem, SVGContainerForNeedItem } from './ZibraniKoshti.styled';
import { nanoid } from 'nanoid';
import { useMediaQuery } from 'react-responsive';

export const NeedToDoCards = () => {
  const tasks = [
    'Закупівля й встановлення меблів, обладнання для кухні та сантехніки для вбиралень',
    'Встановлення системи кондиціонування',
    'Освітлення простору',
  ];

  const isDesktop = useMediaQuery({ minWidth: 1440 });

  return tasks.map((task) => (
    <NeedToDoItem key={nanoid()}>
      <SVGContainerForNeedItem isDesktop={isDesktop}>$</SVGContainerForNeedItem>
      <div>
        <h4>Залишилось зробити</h4>
        <p>{task}</p>
      </div>
    </NeedToDoItem>
  ));
};
