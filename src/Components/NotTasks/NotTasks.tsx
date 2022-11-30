import {Icons} from "../UI/Icons/Icons";
import {IconsList} from "../UI/Icons/IconsList";
import styles from './NotTasks.module.scss'

export const NotTasks = () => {
  return (
    <div className={styles.wrapper}>
      <h2>Добавьте задачу, чтобы добиться успеха!</h2>
      <Icons icon={IconsList.TomatoIcon}/>
    </div>
  )
}