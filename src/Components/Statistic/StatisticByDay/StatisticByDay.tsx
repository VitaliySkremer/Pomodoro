import styles from './StaitsticByDay.module.scss'
export const StatisticByDay = () => {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.wrapper_title}>Понедельник</h3>
      <p className={styles.wrapper_text}>
        Вы работали над задачами в течение
        <span className={styles.wrapper_text_counter}> 51 минуты</span>
      </p>
    </div>
  )
}