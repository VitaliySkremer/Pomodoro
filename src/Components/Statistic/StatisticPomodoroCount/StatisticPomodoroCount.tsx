import styles from './StatisticPomodoroCount.module.scss'
import {Icons} from "../../UI/Icons/Icons";
import {IconsList} from "../../UI/Icons/IconsList";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {RootState} from "../../../Store/initialState";

interface IStatisticPomodoroCountProps {
  countPomodoro: number
}

export const StatisticPomodoroCount = ({countPomodoro}:IStatisticPomodoroCountProps) => {

  return (
    <div className={styles.wrapper}>
      {countPomodoro===0
        ? <div className={styles.wrapper_empty}>
            <Icons icon={IconsList.TomatoIcon}/>
          </div>
        : <div className={styles.wrapper_full}>
            <div className={styles.wrapper_full_counter}>
              <Icons icon={IconsList.TomatoCountIcon}/>
              <span className={styles.wrapper_full_counter_text}>
                x {countPomodoro}
                </span>
            </div>
            <p className={styles.wrapper_full_counter_bottom}>
              {countPomodoro} Помидора
            </p>
          </div>
      }
    </div>
  )
}