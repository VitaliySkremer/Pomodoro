import styles from "./StatisticPause.module.scss";
import {Icons} from "../../UI/Icons/Icons";
import {IconsList} from "../../UI/Icons/IconsList";
import {useEffect, useState} from "react";

export const StatisticPause = () => {
  const [isActive, setIsActive] = useState(false);
  useEffect(()=>{
    setIsActive(true)
  })
  return (
    <div className={[styles.pause, isActive? styles.pause_active:''].join(' ')}>
      <div className={styles.pause_block}>
        <span className={styles.pause_block_text}>Время на паузе</span>
        <span className={styles.pause_block_number}>9м</span>
      </div>
      <Icons icon={IconsList.PauseIcon}/>
    </div>
  )
}