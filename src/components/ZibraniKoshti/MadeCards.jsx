import tasks from './MadedTasks.json';
import { MadeList, MadeListItem } from './ZibraniKoshti.styled';


export const MadeCards = () => {
  return (
    <MadeList>
      {tasks.map(({ title, listTasks }, i) => (
        <MadeListItem key={i}>
          <h4>{title}</h4>
          <ul>
            {listTasks.map((task, i) => (
              <li key={i}>{task}</li>
            ))}
          </ul>
        </MadeListItem>
      ))}
    </MadeList>
  );
};
