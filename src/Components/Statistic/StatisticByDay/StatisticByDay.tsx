import styles from './StaitsticByDay.module.scss'
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {RootState} from "../../../Store/initialState";

interface IStatisticByDayProps {
  time: number
}

export const StatisticByDay = ({time}:IStatisticByDayProps) => {
  const resultTime = () =>{
    const minutes = Math.floor(time % 3600 / 60);
    const hours = Math.floor(time / 3600);

    return `${hours? hours + ' ч': ''} ${minutes} мин`
  }
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.wrapper_title}>Понедельник</h3>
      <p className={styles.wrapper_text}>
        Вы работали над задачами в течение
        <span className={styles.wrapper_text_counter}>{resultTime()}</span>
      </p>
    </div>
  )
}