import styles from './Statistic.module.scss'
import {StatisticSelect} from "./StatisticSelect/StatisticSelect";
import {useState} from "react";
export const Statistic = () => {
  const [isChoose, setIsChoose] = useState('Эта неделя')
  const [selectList] = useState(()=> ['Эта неделя','Прошедшая неделя','2 недели назад'])

  return (
    <div className={styles.container}>
      <StatisticSelect choose={isChoose} setIsChoose={setIsChoose} list={selectList}/>
    </div>
  )
}