import styles from './Task.module.scss'
import {useEffect, useRef, useState} from "react";
import {DropDown} from "../../../UI/DropDown/DropDown";
import {MenuTask} from "../../../MenuTask/MenuTask";
import {Modal} from "../../../UI/Modal/Modal";
import {FormsDeleteTask} from "../../../FormDeleteTask/FormsDeleteTask";
import {useDispatch} from "react-redux";
import {editTask} from "../../../../Store/rootReducer";

interface ITask {
  task: {
    id: string;
    name: string;
    countPomodoro: number;
  }
}

export const Task = ({task}: ITask) => {
  const [created, setCreated] = useState(false);
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [isEditOpened, setIsEditOpened] = useState(false);
  const ref = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch<any>();
  const openModal = () => {
    setIsModalOpened(true);
  }

  const openEdit = () => {
    setIsEditOpened(true);
  }

  const onBlur = () => {
    if (ref.current?.value){
      dispatch(editTask(task.id, ref.current?.value));
      setIsEditOpened(false);
    }
  }

  useEffect(() => {
    if (ref.current) {
      ref.current.value = task.name;
      ref.current.focus();
    }
  }, [isEditOpened])

  useEffect(() => {
    setCreated(true);
  }, []);

  const buttonMenu = (
    <svg className={styles.item_menu} width="26" height="6" viewBox="0 0 26 6" fill="none"
         xmlns="http://www.w3.org/2000/svg">
      <circle cx="3" cy="3" r="3" fill="#C4C4C4"/>
      <circle cx="13" cy="3" r="3" fill="#C4C4C4"/>
      <circle cx="23" cy="3" r="3" fill="#C4C4C4"/>
    </svg>
  )

  return (
    <li className={[styles.item, created ? styles.item_created : ''].join(' ')}>
      <p className={styles.item_pomodor}>
        {task.countPomodoro}
      </p>
      {isEditOpened
        ? <input onBlur={onBlur} ref={ref} className={styles.item_inputName} placeholder='Название задачи'/>
        : <p className={styles.item_name}>{task.name}</p>
      }
      <DropDown button={buttonMenu}>
        <MenuTask openModal={openModal} openEdit={openEdit} id={task.id}/>
      </DropDown>
      {isModalOpened && (
        <Modal id={task.id} onClose={() => setIsModalOpened(false)}>
          <FormsDeleteTask closeModal={() => setIsModalOpened(false)} id={task.id}/>
        </Modal>
      )}
    </li>
  )
}