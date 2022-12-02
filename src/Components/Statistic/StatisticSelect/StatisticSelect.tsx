import styles from './StatisticSelect.module.scss'
import {Select} from "../../UI/Select/Select";

interface IStatisticSelect {
  choose: string,
  list: Array<string>,
  setIsChoose: (choose:string)=> void
}

export const StatisticSelect = ({choose, list, setIsChoose}:IStatisticSelect) => {
  return (
    <div className={styles.select__container}>
      <h2 className={styles.select__container_title}>Ваша активность</h2>
      <Select choose={choose} list={list} setIsChoose={setIsChoose}/>
    </div>
  )
}