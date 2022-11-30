import {useSelector} from "react-redux";
import {ITask, RootState} from "../../../Store/initialState";
import styles from './TaskList.module.scss'
import {Task} from "./Task/Task";
export const TasksList =  () => {
  const tasks = useSelector<RootState, ITask[]>(state => state.tasks)

  return (
    <ul className={styles.task__list}>
      {tasks.map(item=>
        <Task key={item.id} task={item}/>
      )}
    </ul>
  )
}