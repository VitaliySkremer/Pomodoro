import styles from './StatisticGraph.module.scss'
import {useState} from "react";
import {Graph} from "./Graph/Graph";

const enum DayWeek {
  Monday = 'Пн',
  Tuesday = 'Вт',
  Wednesday = 'Ср',
  Thursday = 'Чт',
  Friday = 'Пт',
  Saturday = 'Сб',
  Sunday = 'Вс',
}

const timeLine = ['1 ч 40мин','1 ч 15 мин', '50 мин', '25 мин'];
const weekDay = [DayWeek.Monday,DayWeek.Tuesday, DayWeek.Wednesday, DayWeek.Thursday, DayWeek.Friday ,DayWeek.Saturday, DayWeek.Sunday];
const arrTimeDay = [
  {day:DayWeek.Monday, value: 1500},
  {day:DayWeek.Tuesday, value: 1000},
  {day:DayWeek.Wednesday, value: 10000},
  {day:DayWeek.Thursday, value: 1234},
  {day:DayWeek.Friday, value: 4345},
  {day:DayWeek.Saturday, value: 300},
  {day:DayWeek.Sunday, value: 0}];

export const StatisticGraph = () => {
  const [radio, setRadio] = useState('');
  return (
    <div className={styles.wrapper}>
      <div className={styles.graph__block}>
        <ul className={styles.list__time}>
          {timeLine.map(item=>
            <li className={styles.list__time_item} key={item}>
              <div className={styles.list__time_item_dividers}/>
              <span>{item}</span>
            </li>
          )}
        </ul>
        <div className={styles.graph}>
          {arrTimeDay.map((item, index)=>
            <Graph key={index} time={item} setRadio={setRadio} radio={radio}/>
          )}
        </div>
      </div>
      <div className={styles.control__panel}/>
    </div>
  )
}