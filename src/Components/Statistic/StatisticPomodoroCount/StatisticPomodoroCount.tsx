import styles from './StatisticPomodoroCount.module.scss'
import {Icons} from "../../UI/Icons/Icons";
import {IconsList} from "../../UI/Icons/IconsList";
import {useState} from "react";

export const StatisticPomodoroCount = () => {
  const [count] = useState(3)
  return (
    <div className={styles.wrapper}>
      {count===0
        ? <div className={styles.wrapper_empty}>
            <Icons icon={IconsList.TomatoIcon}/>
          </div>
        : <div className={styles.wrapper_full}>
            <div className={styles.wrapper_full_counter}>
              <Icons icon={IconsList.TomatoCountIcon}/>
              <span className={styles.wrapper_full_counter_text}>
                x {count}
                </span>
            </div>
            <p className={styles.wrapper_full_counter_bottom}>
              {count} Помидора
            </p>
          </div>
      }
    </div>
  )
}