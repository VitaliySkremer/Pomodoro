import {Button} from "../../UI/Button/Button";
import {Input} from "../../UI/Input/Input";
import styles from './FormAddTask.module.scss'
import {FormEvent, useState} from "react";
import { useDispatch } from "react-redux";
import {Actions} from "../../../Store/Actions";
import {ITask} from "../../../Store/initialState";
import {TasksList} from "../TasksList/TasksList";

export const FormAddTask = () => {
  const dispatch = useDispatch<any>()
  const [nameTask, setNameTask] = useState('');
  const handlerSubmit = (event: FormEvent) =>{
    event.preventDefault();
    if(!nameTask) return;
    const task:ITask = {
      id: Math.random().toString( 12),
      name: nameTask,
      countPomodoro: 1,
      timeTick: 1500000, //25 мин
      timeShortPause: 180000, //3 мин
      timeLongPause: 900000, //15 мин
    }
    dispatch({type: Actions.ADD_TASK, task})
    setNameTask('');
  }

  return (
    <div>
      <form onSubmit={handlerSubmit} className={styles.form}>
        <label className={styles.label}>
          <Input value={nameTask} onChange={(event)=> setNameTask(event.target.value)} placeholder='Название задачи'/>
        </label>
        <div>
          <Button>
            Добавить
          </Button>
        </div>
      </form>
      <TasksList/>
    </div>
  )
}