import styles from './Statistic.module.scss'
import {StatisticSelect} from "./StatisticSelect/StatisticSelect";
import {StatisticByDay} from "./StatisticByDay/StatisticByDay";
import {StatisticPomodoroCount} from "./StatisticPomodoroCount/StatisticPomodoroCount";
import {StatisticFocus} from "./StatisticFocuse/StatisticFocus";
import {StatisticPause} from "./StatisticPause/StatisticPause";
import {StatisticStop} from "./StatisticStop/StatisticStop";
import {StatisticGraph} from "./StatisticGraph/StatisticGraph";
import {DayWeek} from "../../Store/initialState";
import {useStatistic} from "../../Hooks/useStatistic";


export const Statistic = () => {

  const {isChoose, setIsChoose, selectList, selectDay, radio, setRadio ,arrTimeDay} = useStatistic();

  return (
    <div className={styles.container}>
      <StatisticSelect choose={isChoose} setIsChoose={setIsChoose} list={selectList}/>
      <div className={styles.statistic__wrapper}>
        <div className={styles.statistic__main}>
            <StatisticByDay time={selectDay?.timer || 0} day={selectDay?.day || DayWeek.Monday}/>
            <StatisticPomodoroCount countPomodoro={selectDay?.countPomodoro || 0}/>
            <StatisticGraph radio={radio} setRadio={setRadio} statisticDays={arrTimeDay}/>
        </div>
        <div className={styles.statistic__bottom}>
          <StatisticFocus timer={selectDay?.timer || 0} timePause={selectDay?.timePause || 0}/>
          <StatisticPause timePause={selectDay?.timePause || 0}/>
          <StatisticStop stopCount={selectDay?.stopCount || 0}/>
        </div>
      </div>
    </div>
  )
}