import styles from "./MenuTask.module.scss";
import {Icons} from "../UI/Icons/Icons";
import {IconsList} from "../UI/Icons/IconsList";
import {useDispatch} from "react-redux";
import {taskAddPomodoro} from "../../Store/rootReducer";

export const Added = ({id}:{id:string}) => {
  const dispatch = useDispatch<any>()
  const addPomodoro = () =>{
    dispatch(taskAddPomodoro(id))
  }
  return (
    <li>
      <button onClick={addPomodoro} className={styles.button}><Icons icon={IconsList.AddedIcon}/>Увеличить</button>
    </li>
  )
}