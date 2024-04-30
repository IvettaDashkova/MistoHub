import { nanoid } from 'nanoid';
import tasks from './MadedTasks.json';
import { MadeListItem, SVGContainer } from './ZibraniKoshti.styled';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Iconsvg from '../Icon/Icon';
import { useMediaQuery } from 'react-responsive';

export const MadeCards = () => {
  const isDesktop = useMediaQuery({ minWidth: 1440 });

  return tasks.map(({ title, listTasks }) => (
    <MadeListItem isDesktop={isDesktop} key={nanoid()}>
      <SVGContainer isDesktop={isDesktop}>
        <Iconsvg width="12px" height="12px" iconName="icon-Vector-1" />
      </SVGContainer>

      {isDesktop ? (
        <div>
          <h4>{title}</h4>
          <ul>
            {listTasks.map((task) => (
              <li key={nanoid()}>{task}</li>
            ))}
          </ul>
        </div>
      ) : (
        <>
          <h4>{title}</h4>
          <ul>
            {listTasks.map((task) => (
              <li key={nanoid()}>{task}</li>
            ))}
          </ul>
        </>
      )}
    </MadeListItem>
  ));
};
