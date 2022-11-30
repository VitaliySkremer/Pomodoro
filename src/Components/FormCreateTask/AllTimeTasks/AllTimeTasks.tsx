import styles from './AllTimeTasks.module.scss'
import {useSelector} from "react-redux";
import {RootState} from "../../../Store/initialState";
export const AllTimeTasks = () => {

  function getAllTime(){
    const timeTick = useSelector<RootState, number>(state => state.time.timeTick);
    const countPomodoro = useSelector<RootState,number>(state => state.tasks.reduce((acc, item)=>acc+item.countPomodoro,0))
    const resultTime = timeTick * countPomodoro;
    if(!resultTime) return '';

    const minutes = Math.floor(resultTime % 3600 / 60);
    const hours = Math.floor(resultTime / 3600);
    return `${hours} ч ${minutes} мин`;
  }

  const timeTask = getAllTime();

  return (
    <p className={styles.time}>{timeTask}</p>
  )
}