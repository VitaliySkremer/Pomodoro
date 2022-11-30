import styles from "./MenuTask.module.scss";
import {Icons} from "../UI/Icons/Icons";
import {IconsList} from "../UI/Icons/IconsList";
import {useDispatch, useSelector} from "react-redux";
import { RootState} from "../../Store/initialState";
import {taskDeletePomodoro} from "../../Store/rootReducer";

export const Decrease = ({id}:{id:string}) => {
  const countPomodoro = useSelector<RootState, number>(state => state.tasks.find(item=> item.id===id)!.countPomodoro)
  const dispatch = useDispatch<any>()
  const deletePomodoro = () =>{
    dispatch(taskDeletePomodoro(id))
  }
  return (
    <li>
      <button disabled={countPomodoro<=1} onClick={deletePomodoro} className={styles.button}><Icons icon={IconsList.DecreaseIcon}/>Уменьшить</button>
    </li>
  )
}