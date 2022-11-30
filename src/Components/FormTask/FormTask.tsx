import styles from "./FormTask.module.scss"
import {InfoTask} from "./InfoTask/InfoTask";
import {useSelector} from "react-redux";
import {ITask, RootState} from "../../Store/initialState";
import {NotTasks} from "../NotTasks/NotTasks";

export const FormTask = () => {
  const task = useSelector<RootState, ITask>(state => state.tasks[0]);

  return (
    <div className={styles.wrapper}>
      {task ?
          <InfoTask
            task={task}
          />
        : <NotTasks/>
      }
    </div>
  )
}