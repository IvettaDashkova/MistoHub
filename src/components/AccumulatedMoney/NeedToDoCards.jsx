import {
  NeedToDoItem,
  SVGContainerForNeedItem,
} from './AccumulatedMoney.styled';
import { nanoid } from 'nanoid';
import { useMediaQuery } from 'react-responsive';
import tasks from '../../constants/NeedToDoTasks.json';

export const NeedToDoCards = () => {
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
