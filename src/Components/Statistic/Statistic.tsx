import styles from './Statistic.module.scss'
import {StatisticSelect} from "./StatisticSelect/StatisticSelect";
import {useState} from "react";
import {StatisticByDay} from "./StatisticByDay/StatisticByDay";
import {StatisticPomodoroCount} from "./StatisticPomodoroCount/StatisticPomodoroCount";
import {StatisticFocus} from "./StatisticFocuse/StatisticFocus";
import {StatisticPause} from "./StatisticPause/StatisticPause";
import {StatisticStop} from "./StatisticStop/StatisticStop";
import {StatisticGraph} from "./StatisticGraph/StatisticGraph";
export const Statistic = () => {
  const [isChoose, setIsChoose] = useState('Эта неделя')
  const [selectList] = useState(()=> ['Эта неделя','Прошедшая неделя','2 недели назад'])

  return (
    <div className={styles.container}>
      <StatisticSelect choose={isChoose} setIsChoose={setIsChoose} list={selectList}/>
      <div className={styles.statistic__wrapper}>
        <div className={styles.statistic__main}>
            <StatisticByDay/>
            <StatisticPomodoroCount/>
            <StatisticGraph/>
        </div>
        <div className={styles.statistic__bottom}>
          <StatisticFocus/>
          <StatisticPause/>
          <StatisticStop/>
        </div>
      </div>
    </div>
  )
}