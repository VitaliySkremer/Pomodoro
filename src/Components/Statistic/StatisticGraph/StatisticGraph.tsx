import styles from './StatisticGraph.module.scss'
import {Graph} from "./Graph/Graph";
import {DayWeek} from '../../../Store/initialState';
import { ILocalStorage } from '../../FormTask/InfoTask/InfoTask';


const timeLine = ['1 ч 40мин','1 ч 15 мин', '50 мин', '25 мин'];


interface IStatisticGraph {
  statisticDays: ILocalStorage[]
  day: DayWeek,
  radio: DayWeek,
  setRadio: (radio:DayWeek)=>void
}

export const StatisticGraph = ({statisticDays,day,radio,setRadio}:IStatisticGraph) => {

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
          {statisticDays.map((item, index)=>
            <Graph
              key={index}
              time={item}
              setRadio={setRadio}
              radio={radio}
            />
          )}
        </div>
      </div>
      <div className={styles.control__panel}/>
    </div>
  )
}