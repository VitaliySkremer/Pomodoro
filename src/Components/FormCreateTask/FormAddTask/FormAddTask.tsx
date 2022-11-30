import {Button} from "../../UI/Button/Button";
import {Input} from "../../UI/Input/Input";
import styles from './FormAddTask.module.scss'
import {FormEvent, useState} from "react";
import { useDispatch } from "react-redux";
import {ITask} from "../../../Store/initialState";
import {TasksList} from "../TasksList/TasksList";
import {taskAdd} from "../../../Store/rootReducer";

export const FormAddTask = () => {
  const dispatch = useDispatch<any>()
  const [nameTask, setNameTask] = useState('');
  const handlerSubmit = (event: FormEvent) =>{
    event.preventDefault();
    if(!nameTask) return;
    const task:ITask = {
      id: Math.random().toString( 7),
      name: nameTask,
      countPomodoro: 1,
    }
    dispatch(taskAdd(task))
    setNameTask('');
  }

  return (
    <>
      <form onSubmit={handlerSubmit} className={styles.form}>
        <label className={styles.label}>
          <Input value={nameTask} onChange={(event: FormEvent<HTMLInputElement>)=> setNameTask(event.currentTarget.value)} placeholder='Название задачи'/>
        </label>
        <div>
          <Button>
            Добавить
          </Button>
        </div>
      </form>
      <TasksList/>
    </>
  )
}