import styles from "./StatisticStop.module.scss";
import {Icons} from "../../UI/Icons/Icons";
import {IconsList} from "../../UI/Icons/IconsList";
import {useEffect, useState} from "react";

export const StatisticStop = () => {
  const [isActive, setIsActive] = useState(false);
  useEffect(()=>{
    setIsActive(true)
  })
  return (
    <div className={[styles.stop, isActive?styles.stop_active:''].join(' ')}>
      <div className={styles.stop_block}>
        <span className={styles.stop_block_text}>Остановки</span>
        <span className={styles.stop_block_number}>3</span>
      </div>
      <Icons icon={IconsList.StopIcon}/>
    </div>
  )
}