import styles from "./StatisticPause.module.scss";
import {Icons} from "../../UI/Icons/Icons";
import {IconsList} from "../../UI/Icons/IconsList";

export const StatisticPause = () => {
  return (
    <div className={styles.pause}>
      <div className={styles.pause_block}>
        <span className={styles.pause_block_text}>Фокус</span>
        <span className={styles.pause_block_number}>9м</span>
      </div>
      <Icons icon={IconsList.PauseIcon}/>
    </div>
  )
}