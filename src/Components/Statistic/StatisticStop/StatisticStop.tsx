import styles from "./StatisticStop.module.scss";
import {Icons} from "../../UI/Icons/Icons";
import {IconsList} from "../../UI/Icons/IconsList";

export const StatisticStop = () => {
  return (
    <div className={styles.stop}>
      <div className={styles.stop_block}>
        <span className={styles.stop_block_text}>Остановки</span>
        <span className={styles.stop_block_number}>3</span>
      </div>
      <Icons icon={IconsList.StopIcon}/>
    </div>
  )
}