import styles from './StaitsticByDay.module.scss'
import {useEffect, useState} from "react";
export const StatisticByDay = () => {
  const [isActive, setIsActive] = useState(false);
  useEffect(()=>{
    setIsActive(true)
  })
  return (
    <div className={[styles.wrapper, isActive? styles.wrapper_active:''].join(' ')}>
      <h3 className={styles.wrapper_title}>Понедельник</h3>
      <p className={styles.wrapper_text}>
        Вы работали над задачами в течение
        <span className={styles.wrapper_text_counter}> 51 минуты</span>
      </p>
    </div>
  )
}