import styles from './InfoTask.module.scss'
import {Button} from "../../UI/Button/Button";
import {ButtonCalc} from "../../UI/ButtonCalc/ButtonCalc";
import {ITask, RootState} from "../../../Store/initialState";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addMinuteTick, deleteMinuteTick, taskDelete} from "../../../Store/rootReducer";
import useSound from "use-sound";
import boop from '../../../Sounds/bob.mp3';

interface InfoTaskProps {
  task: ITask;
}

export const InfoTask = ({task}:InfoTaskProps) => {
  const [isActive, setIsActive] = useState(false);
  const MainTime = useSelector<RootState, number>(state => state.time.timeTick)
  const shortTick = useSelector<RootState,number>(state => state.time.timeShortPause)
  const longTick = useSelector<RootState,number>(state => state.time.timeLongPause)
  const dispatch = useDispatch<any>();
  const [pomodoro, setPomodoro] = useState(1);
  const [timeTick, setTimeTick] = useState(MainTime)
  const [isPause, setIsPause] = useState(true);
  const [isComplete, setIsComplete] = useState(false);
  const [playSound] = useSound(boop);
  const togglePause = () => setIsPause(!isPause);
  const addMinute = () => dispatch(addMinuteTick());
  const minusMinute = () => dispatch(deleteMinuteTick());

  const resetTimer = ()=>{
    setIsActive(false);
    setIsPause(true);
    setTimeTick(MainTime);
    setIsComplete(false)
  }

  const endTask = ()=>{
    if(pomodoro===task.countPomodoro){
      dispatch(taskDelete(task.id));
    }
  }

  const time = () => {
    const minutes = Math.floor(timeTick % 3600 / 60);
    const seconds = (timeTick % 3600 % 60);
    return (minutes <10 ? '0' : '')+ minutes + ":" + (+seconds < 10 ? '0' : '') + seconds;
  }

  useEffect(()=>{
    let interval: any = null;
    if(isActive && !isPause){
      interval = setInterval(()=>{
        setTimeTick(prevState => prevState - 1)
        if(timeTick===shortTick) {
          setIsComplete(true)
          playSound();
        }
        if(timeTick === 0){
          setPomodoro(prevState => prevState + 1)
          resetTimer();
          endTask();
        }
      }, 1000)
    }else if(!isActive || isPause){
      clearInterval(interval);
    }
    return()=>{
      clearInterval(interval)
    }
  }, [isActive,isPause, timeTick])

  useEffect(()=>{
    resetTimer();
    setPomodoro(1);
  }, [task.id, MainTime])

  const stop = () => {
    if (isActive && isPause && !isComplete){
      setIsPause(false);
      setIsComplete(true);
      setTimeTick(pomodoro % 5 === 0 ? longTick - 1: shortTick - 1);
      playSound();
    }
    else if(isComplete) {
      setPomodoro(prevState => prevState + 1)
      resetTimer();
      endTask();
    }
    else {
      resetTimer();
    }
  }

  return (
    <>
      <div className={styles.header} style={isActive && !isComplete? {backgroundColor:'var(--pomodoro-red)'}: isComplete?{backgroundColor:'var(--btn-bg)'} :{backgroundColor:'var(--task-header-bg)'}}>
        <span>{task.name}</span>
        <span>Помидор {pomodoro}</span>
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
          <span>{task.name}</span>
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