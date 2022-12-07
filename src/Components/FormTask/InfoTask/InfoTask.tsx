import styles from './InfoTask.module.scss'
import {Button} from "../../UI/Button/Button";
import {ButtonCalc} from "../../UI/ButtonCalc/ButtonCalc";
import {DayWeek, ITask, RootState, weekDay} from "../../../Store/initialState";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
  addMinuteTick,
  deleteMinuteTick,
  editPomodor,
  taskDelete
} from "../../../Store/rootReducer";
import useSound from "use-sound";
import boop from '../../../Sounds/bob.mp3';

interface InfoTaskProps {
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
  const [isActive, setIsActive] = useState(false);
  const MainTime = useSelector<RootState, number>(state => state.time.timeTick)
  const shortTick = useSelector<RootState,number>(state => state.time.timeShortPause)
  const longTick = useSelector<RootState,number>(state => state.time.timeLongPause)
  const dispatch = useDispatch<any>();
  const pomodoro = useSelector<RootState, number>(state => state.time.pomodor)
  const [timeTick, setTimeTick] = useState(MainTime)
  const [isPause, setIsPause] = useState(true);
  const [isComplete, setIsComplete] = useState(false);
  const [workTime, setWorkTime] = useState(0);
  let localData:ILocalStorage[] = localStorage.getItem('pomodor')? [...JSON.parse(localStorage.pomodor)] : []
  localData.length = 21;
  const todayData:ILocalStorage = {
    id: (new Date().getDate() + new Date().getMonth()).toString(),
    day: weekDay[new Date().getDay()],
    countPomodoro: 0,
    stopCount: 0,
    timePause: 0,
    timer: 0
  };
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
      dispatch(editPomodor(1));
    }
  }

  const completeTask = () =>{
    dispatch(editPomodor(pomodoro + 1));
    if(localData[0] && localData[0].id===todayData.id){
      localData[0].countPomodoro += 1;
      localData[0].timer += workTime;
    }
    else {
      todayData.countPomodoro += 1;
      todayData.timer += workTime;
      localData = [todayData,...localData];
    }
    setWorkTime(0);
    resetTimer();
    endTask();
  }

  const time = () => {
    const minutes = Math.floor(timeTick % 3600 / 60);
    const seconds = (timeTick % 3600 % 60);
    return (minutes <10 ? '0' : '')+ minutes + ":" + (+seconds < 10 ? '0' : '') + seconds;
  }

  useEffect(()=>{
    let interval: any = null;
    let pauseInterval: any = null;
    if(isActive && !isPause){
      clearInterval(pauseInterval);
      interval = setInterval(()=>{
        setTimeTick(prevState => prevState - 1)
        if(!isComplete){
          setWorkTime(prevState => prevState + 1);
        }
        if(timeTick===shortTick) {
          setIsComplete(true)
          playSound();
        }
        if(timeTick === 0){
          setWorkTime(MainTime - shortTick);
          completeTask();
        }
        localStorage.pomodor = JSON.stringify(localData)
      }, 1000)
    }else if(!isActive && !isPause){
      clearInterval(interval);
      clearInterval(pauseInterval);
    }else if(isActive && isPause){
      pauseInterval = setInterval(()=>{
        if(localData[0] && localData[0].id===todayData.id){
          localData[0].timePause += 1;
        }
        else {
          todayData.timePause+=1;
          localData = [todayData,...localData];
        }
        localStorage.pomodor = JSON.stringify(localData)
      }, 1000)
    }
    return()=>{
      clearInterval(interval)
      clearInterval(pauseInterval);
    }
  }, [isActive,isPause, timeTick])

  useEffect(()=>{
    resetTimer();
  }, [task.id, MainTime])

  const stop = () => {
    if (isActive && isPause && !isComplete){
      setIsPause(false);
      setIsComplete(true);
      setTimeTick(pomodoro % 5 === 0 ? longTick - 1: shortTick - 1);
      playSound();
    }
    else if(isComplete) {
      completeTask();
      localStorage.pomodor = JSON.stringify(localData)
    }
    else {
      setWorkTime(0)
      resetTimer();
      if(localData[0] && localData[0].id===todayData.id){
        localData[0].stopCount += 1;
      }
      else {
        todayData.stopCount+=1;
        localData = [todayData,...localData];
      }
      localStorage.pomodor = JSON.stringify(localData)
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