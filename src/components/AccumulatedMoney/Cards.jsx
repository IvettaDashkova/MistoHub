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

  const sortTasks = (needToDoTasks) => {
    if (!needToDoTasks) return;
    return needToDoTasks.reduce((acc, task) => {
      if (task.is_done) return isDesktop ? [task, ...acc] : [...acc, task];
      else return isDesktop ? [...acc, task] : [task, ...acc];
    }, []);
  };

  return (
    <>
      {needToDoTasks &&
        sortTasks(needToDoTasks).map(({ tasks, title, is_done }) => {
          return is_done ? (
            <MadeListItem isDesktop={isDesktop} key={nanoid()}>
              <SVGContainer isDesktop={isDesktop}>
                <Iconsvg width="12px" height="12px" iconName="icon-Vector-1" />
              </SVGContainer>
              <div>
                <h4>{title}</h4>
                <ul>
                  {tasks.map((task) => (
                    <li key={nanoid()}>{task}</li>
                  ))}
                </ul>
              </div>
            </MadeListItem>
          ) : (
            <NeedToDoItem key={nanoid()}>
              <SVGContainerForNeedItem isDesktop={isDesktop}>
                $
              </SVGContainerForNeedItem>
              <div>
                <h4>{title}</h4>
                <p>{tasks}</p>
              </div>
            </NeedToDoItem>
          );
        })}
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
