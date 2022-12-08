import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState, weekDay} from "../Store/initialState";
import useSound from "use-sound";
import boop from "../Sounds/bob.mp3";
import {addMinuteTick, deleteMinuteTick, editPomodor, taskDelete} from "../Store/rootReducer";
import {ILocalStorage, InfoTaskProps} from "../Components/FormTask/InfoTask/InfoTask";

export const useInfoTask = ({task}: InfoTaskProps) => {

  const [isActive, setIsActive] = useState(false);
  const MainTime = useSelector<RootState, number>(state => state.time.timeTick)
  const shortTick = useSelector<RootState, number>(state => state.time.timeShortPause)
  const longTick = useSelector<RootState, number>(state => state.time.timeLongPause)
  const dispatch = useDispatch<any>();
  const [timeTick, setTimeTick] = useState(MainTime)
  const [isPause, setIsPause] = useState(true);
  const [isComplete, setIsComplete] = useState(false);
  const [workTime, setWorkTime] = useState(0);
  const pomodoroActive = task.focusPomodoro;
  let localData: ILocalStorage[] = localStorage.getItem('pomodor') ? [...JSON.parse(localStorage.pomodor)] : []
  localData.length = 21;
  const todayData: ILocalStorage = {
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

  const resetTimer = () => {
    setIsActive(false);
    setIsPause(true);
    setTimeTick(MainTime);
    setIsComplete(false)
  }

  const endTask = () => {
    if (task.focusPomodoro === task.countPomodoro) {
      dispatch(taskDelete(task.id));
    }
  }

  const completeTask = () => {
    dispatch(editPomodor());
    if (localData[0] && localData[0].id === todayData.id) {
      localData[0].countPomodoro += 1;
      localData[0].timer += workTime;
    } else {
      todayData.countPomodoro += 1;
      todayData.timer += workTime;
      localData = [todayData, ...localData];
    }
    setWorkTime(0);
    resetTimer();
    endTask();
  }

  const time = () => {
    const minutes = Math.floor(timeTick % 3600 / 60);
    const seconds = (timeTick % 3600 % 60);
    return (minutes < 10 ? '0' : '') + minutes + ":" + (+seconds < 10 ? '0' : '') + seconds;
  }

  useEffect(() => {
    let interval: any = null;
    let pauseInterval: any = null;
    if (isActive && !isPause) {
      clearInterval(pauseInterval);
      interval = setInterval(() => {
        setTimeTick(prevState => prevState - 1)
        if (!isComplete) {
          setWorkTime(prevState => prevState + 1);
        }
        if (timeTick === shortTick) {
          setIsComplete(true)
          playSound();
        }
        if (timeTick === 0) {
          setWorkTime(MainTime - shortTick);
          completeTask();
        }
        localStorage.pomodor = JSON.stringify(localData)
      }, 1000)
    } else if (!isActive && !isPause) {
      clearInterval(interval);
      clearInterval(pauseInterval);
    } else if (isActive && isPause) {
      pauseInterval = setInterval(() => {
        if (localData[0] && localData[0].id === todayData.id) {
          localData[0].timePause += 1;
        } else {
          todayData.timePause += 1;
          localData = [todayData, ...localData];
        }
        localStorage.pomodor = JSON.stringify(localData)
      }, 1000)
    }
    return () => {
      clearInterval(interval)
      clearInterval(pauseInterval);
    }
  }, [isActive, isPause, timeTick])

  useEffect(() => {
    resetTimer();
  }, [task.id, MainTime])

  const stop = () => {
    if (isActive && isPause && !isComplete) {
      setIsPause(false);
      setIsComplete(true);
      setTimeTick(task.focusPomodoro % 5 === 0 ? longTick - 1 : shortTick - 1);
      playSound();
    } else if (isComplete) {
      completeTask();
      localStorage.pomodor = JSON.stringify(localData)
    } else {
      setWorkTime(0)
      resetTimer();
      if (localData[0] && localData[0].id === todayData.id) {
        localData[0].stopCount += 1;
      } else {
        todayData.stopCount += 1;
        localData = [todayData, ...localData];
      }
      localStorage.pomodor = JSON.stringify(localData)
    }
  }

  return {
    isActive,
    isComplete,
    isPause,
    pomodoroActive,
    MainTime,
    time,
    stop,
    addMinute,
    minusMinute,
    togglePause,
    setIsActive
  }
}