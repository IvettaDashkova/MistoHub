import { useMediaQuery } from 'react-responsive';
import { MadeListItem, SVGContainer } from './AccumulatedMoney.styled';
import {
  NeedToDoItem,
  SVGContainerForNeedItem,
} from './AccumulatedMoney.styled';
import { nanoid } from 'nanoid';
import Iconsvg from '../Icon/Icon';

export const Cards = ({ needToDoTasks, madedTasks }) => {
  const isDesktop = useMediaQuery({ minWidth: 1440 });

  return (
    <>
      {needToDoTasks &&
        needToDoTasks.map((task) => (
          <NeedToDoItem key={nanoid()}>
            <SVGContainerForNeedItem isDesktop={isDesktop}>
              $
            </SVGContainerForNeedItem>
            <div>
              <h4>Залишилось зробити</h4>
              <p>{task}</p>
            </div>
          </NeedToDoItem>
        ))}
      {madedTasks &&
        madedTasks.map(({ title, listTasks }) => (
          <MadeListItem isDesktop={isDesktop} key={nanoid()}>
            <SVGContainer isDesktop={isDesktop}>
              <Iconsvg width="12px" height="12px" iconName="icon-Vector-1" />
            </SVGContainer>
            <div>
              <h4>{title}</h4>
              <ul>
                {listTasks.map((task) => (
                  <li key={nanoid()}>{task}</li>
                ))}
              </ul>
            </div>
          </MadeListItem>
        ))}
    </>
  );
};
