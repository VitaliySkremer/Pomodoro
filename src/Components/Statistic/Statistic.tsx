import styles from './Statistic.module.scss'
import {StatisticSelect} from "./StatisticSelect/StatisticSelect";
import {useState} from "react";
import {StatisticByDay} from "./StatisticByDay/StatisticByDay";
import {StatisticPomodoroCount} from "./StatisticPomodoroCount/StatisticPomodoroCount";
import {StatisticFocus} from "./StatisticFocuse/StatisticFocus";
import {StatisticPause} from "./StatisticPause/StatisticPause";
import {StatisticStop} from "./StatisticStop/StatisticStop";
export const Statistic = () => {
  const [isChoose, setIsChoose] = useState('Эта неделя')
  const [selectList] = useState(()=> ['Эта неделя','Прошедшая неделя','2 недели назад'])

  return (
    <div className={styles.container}>
      <StatisticSelect choose={isChoose} setIsChoose={setIsChoose} list={selectList}/>
      <div className={styles.statistic__main}>
        <div className={styles.statistic__main_counter}>
          <StatisticByDay/>
          <StatisticPomodoroCount/>
        </div>
        <div>

        </div>
      </div>
      <div className={styles.statistic__bottom}>
        <div className={styles.statistic__bottom_block}>
          <StatisticFocus/>
        </div>
        <div className={styles.statistic__bottom_block}>
          <StatisticPause/>
        </div>
        <div className={styles.statistic__bottom_block}>
          <StatisticStop/>
        </div>
      </div>
    </div>
  )
}