import styles from './InfoTask.module.scss'
import {Button} from "../../UI/Button/Button";
import {ButtonCalc} from "../../UI/ButtonCalc/ButtonCalc";
import {DayWeek, ITask} from "../../../Store/initialState";
import {useInfoTask} from "../../../Hooks/useInfoTask";

export interface InfoTaskProps {
  task: ITask;
}

export interface ILocalStorage {
  id: string,
  day: DayWeek,
  countPomodoro: number,
  stopCount: number,
  timePause: number,
  timer: number
}

export const InfoTask = ({task}:InfoTaskProps) => {

  const {isActive,
        isComplete,
        isPause,
    pomodoroActive,
        MainTime,
        time,
        stop,
        addMinute,
        minusMinute,
        togglePause,
        setIsActive} = useInfoTask({task});
  return (
    <>
      <div className={styles.header} style={isActive && !isComplete? {backgroundColor:'var(--pomodoro-red)'}: isComplete?{backgroundColor:'var(--btn-bg)'} :{backgroundColor:'var(--task-header-bg)'}}>
        <span className={styles.header_text}>{task.name}</span>
        <span>Помидор {pomodoroActive}</span>
      </div>
      <div className={styles.info__wrapper}>
        <div className={styles.timer__wrapper}>
          <span className={styles.timer} style={isActive && !isPause && !isComplete? {color: "red"} : isComplete?{color:'var(--btn-bg)'} : {color:'var(--main-color)'}}>{time()}</span>
          <div className={styles.timer__wrapper_add}>
            <ButtonCalc disabled={MainTime >= 1800 || isActive} onClick={addMinute}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.27559 9.13215V16H6.72441V9.13215H0V6.70291H6.72441V0H9.27559V6.70291H16V9.13215H9.27559Z" fill="white"/>
              </svg>
            </ButtonCalc>
          </div>
          <div className={styles.timer__wrapper_minus}>
            <ButtonCalc disabled={MainTime <= 1200 || isActive} onClick={minusMinute}>
              <svg width="16" height="4" viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.27559 3.13212H6.72441H0V0.702881H6.72441H9.27559H16V3.13212H9.27559Z" fill="white"/>
              </svg>
            </ButtonCalc>
          </div>
        </div>
        <div className={styles.info}>
          <span className={styles.info_task_number}>Задача - </span>
          <span className={styles.info_text}>&nbsp;{task.name}</span>
        </div>
        <div>
          <Button onClick={()=>{togglePause(); setIsActive(true)}} mr='25px'>
            {!isActive && isPause? 'Старт' : isActive && !isPause ? 'Пауза': 'Продолжить'}
          </Button>
          <Button disabled={!isActive} isRed={true} onClick={stop}>
            {isActive && isPause && !isComplete ? 'Сделано': isComplete? 'Пропустить': 'Стоп'}
          </Button>
        </div>
      </div>
    </>
  )
}