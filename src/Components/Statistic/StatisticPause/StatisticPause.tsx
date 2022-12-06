import styles from "./StatisticPause.module.scss";
import {Icons} from "../../UI/Icons/Icons";
import {IconsList} from "../../UI/Icons/IconsList";
import {useSelector} from "react-redux";
import {RootState} from "../../../Store/initialState";

export const StatisticPause = () => {
  const pause = useSelector<RootState, number>(state => state.statistic.timePause)

  const resultPause = () =>{
    const minutes = Math.floor(pause / 60);
    return `${minutes}м`
  }

  return (
    <div className={styles.pause}>
      <div className={styles.pause_block}>
        <span className={styles.pause_block_text}>Время на паузе</span>
        <span className={styles.pause_block_number}>{resultPause()}</span>
      </div>
      <Icons icon={IconsList.PauseIcon}/>
    </div>
  )
}