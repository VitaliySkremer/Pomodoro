import styles from './Statistic.module.scss'
import {StatisticSelect} from "./StatisticSelect/StatisticSelect";
import {useEffect, useState} from "react";
import {StatisticByDay} from "./StatisticByDay/StatisticByDay";
import {StatisticPomodoroCount} from "./StatisticPomodoroCount/StatisticPomodoroCount";
import {StatisticFocus} from "./StatisticFocuse/StatisticFocus";
import {StatisticPause} from "./StatisticPause/StatisticPause";
import {StatisticStop} from "./StatisticStop/StatisticStop";
import {StatisticGraph} from "./StatisticGraph/StatisticGraph";

import {DayWeek, RootState, Select, SelectList} from "../../Store/initialState";
import {useSelector} from "react-redux";
import {ILocalStorage} from '../FormTask/InfoTask/InfoTask';

function getArrTimeDay (isChoose:SelectList) {
  let Week:ILocalStorage[] = [
    {day: DayWeek.Monday, timer: 0, id: '', countPomodoro: 0, stopCount: 0, timePause: 0},
    {day: DayWeek.Tuesday,timer: 0, id: '', countPomodoro: 0, stopCount: 0, timePause: 0},
    {day: DayWeek.Wednesday,timer: 0, id: '', countPomodoro: 0, stopCount: 0, timePause: 0},
    {day: DayWeek.Thursday,timer: 0, id: '', countPomodoro: 0, stopCount: 0, timePause: 0},
    {day: DayWeek.Friday,timer: 0, id: '', countPomodoro: 0, stopCount: 0, timePause: 0},
    {day: DayWeek.Saturday,timer: 0, id: '', countPomodoro: 0, stopCount: 0, timePause: 0},
    {day: DayWeek.Sunday,timer: 0, id: '', countPomodoro: 0, stopCount: 0, timePause: 0},
  ]

  if(localStorage.getItem('pomodor')){
    let data:ILocalStorage[] = JSON.parse(localStorage.pomodor);
    if(isChoose === SelectList.now) data.length = new Date().getDay();
    else if(isChoose === SelectList.last) data = data.slice(6,13)
    else  data = data.splice(14,21)

    Week = Week.map(item=>{
      const findItem = data.find(element=> element?.day === item.day);
      if(findItem) return findItem
      return item;
    })
  }
  return Week
}

export const Statistic = () => {
  const [isChoose, setIsChoose] = useState(SelectList.now)
  const [selectList] = useState(()=> Select)
  const day = useSelector<RootState, DayWeek>(state => state.day)
  const [radio, setRadio] = useState<DayWeek>(day);
  const [arrTimeDay, setArrTimeDay] = useState(()=>getArrTimeDay(isChoose))
  const [selectDay, setSelectDay] = useState(arrTimeDay.find(item=>item.day===radio))

  useEffect(()=>{
    setArrTimeDay(getArrTimeDay(isChoose))
  }, [isChoose])

  useEffect(()=>{
    setSelectDay(arrTimeDay.find(item=>item.day===radio));
  },[radio, arrTimeDay])
  return (
    <div className={styles.container}>
      <StatisticSelect choose={isChoose} setIsChoose={setIsChoose} list={selectList}/>
      <div className={styles.statistic__wrapper}>
        <div className={styles.statistic__main}>
            <StatisticByDay time={selectDay?.timer || 0} day={selectDay?.day || DayWeek.Monday}/>
            <StatisticPomodoroCount countPomodoro={selectDay?.countPomodoro || 0}/>
            <StatisticGraph day={day} radio={radio} setRadio={setRadio} statisticDays={arrTimeDay}/>
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