import styles from './StaitsticByDay.module.scss'
import {DayWeek} from "../../../Store/initialState";

interface IStatisticByDayProps {
  time: number;
  day: string
}

export const StatisticByDay = ({time,day}:IStatisticByDayProps) => {
  const resultTime = () =>{
    const minutes = Math.floor(time % 3600 / 60);
    const hours = Math.floor(time / 3600);
    return `${hours? hours + ' ч': ''} ${minutes} мин`
  }

  const resultDay = ()=>{
    switch (day) {
      case DayWeek.Monday: return 'Понедельник'
      case DayWeek.Tuesday: return 'Вторник'
      case DayWeek.Wednesday: return 'Среда'
      case DayWeek.Thursday: return 'Четверг'
      case DayWeek.Friday: return 'Пятница'
      case DayWeek.Saturday: return 'Суббота'
      case DayWeek.Sunday: return 'Воскресенье'
    }
  }

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.wrapper_title}>{resultDay()}</h3>
      <p className={styles.wrapper_text}>
        Вы работали над задачами в течение
        <span className={styles.wrapper_text_counter}>{resultTime()}</span>
      </p>
    </div>
  )
}