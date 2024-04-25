import tasks from './MadedTasks.json';
import { MadeListItem, SVGContainer } from './ZibraniKoshti.styled';
import sprite from './icons/sprite.svg';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const MadeCards = () => {
  return tasks.map(({ title, listTasks }, i) => (
    <MadeListItem key={i}>
      <h4>{title}</h4>
      <ul>
        {listTasks.map((task, i) => (
          <li key={i}>{task}</li>
        ))}
      </ul>
      <SVGContainer>
        <svg>
          <use xlinkHref={`${sprite}#icon-Vector-1`}></use>
        </svg>
      </SVGContainer>
    </MadeListItem>
  ));
};
