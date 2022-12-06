import {Reducer} from "redux";
import { Actions } from "./Actions";
import {DayWeek, initialState, IStatistic, weekDay} from "./initialState";
import {
  TypeAddAllPause,
  TypeAddAllPomodoro,
  TypeAddAllStop,
  TypeAddAllTime
} from "./Types/TypeStatistic";

export interface ILocalStorage {
  id: string,
  day: DayWeek,
  countPomodoro: number,
  stopCount: number,
  timePause: number,
  timer: number
}

type statisticAction = TypeAddAllPomodoro| TypeAddAllTime |TypeAddAllStop |TypeAddAllPause;

export const statisticReducer: Reducer<IStatistic, statisticAction> = (state = initialState.statistic, action)=>{
  let data:ILocalStorage[] = [];
  if (localStorage.getItem('pomodor')) {
    data = [...JSON.parse(localStorage.pomodor)];
    data.length = 21;
  }

  const today: ILocalStorage = {
    id: (new Date().getDate() + new Date().getMonth()).toString(),
    day: weekDay[new Date().getDay()],
    countPomodoro: state.countPomodoro,
    stopCount: state.stopCount,
    timePause: state.timePause,
    timer: state.timer
  }
  switch (action.type){
    case Actions.ADD_ALL_POMODORO:
      today.countPomodoro += 1;
      if(data[0] && data[0].id===today.id) data[0].countPomodoro+=1;
      else data = [today,...data];
      localStorage.pomodor = JSON.stringify(data)
      return{
        ...state,
          countPomodoro: state.countPomodoro + 1
      }
    case Actions.ADD_ALL_STOP:
      today.stopCount += 1;
      if(data[0] && data[0].id===today.id) data[0].stopCount+=1;
      else data = [today,...data];
      localStorage.pomodor = JSON.stringify(data)
      return {
        ...state,
          stopCount: state.stopCount + 1
      }
    case Actions.ADD_ALL_PAUSE:
      today.timePause += 60;
      if(data[0] && data[0].id===today.id) data[0].timePause+=60;
      else data= [today,...data];
      localStorage.pomodor = JSON.stringify(data)
      return {
        ...state,
          timePause: state.timePause + 60
      }
    case Actions.ADD_ALL_TIME:
      today.timer += 60;
      if(data[0] && data[0].id===today.id) data[0].timer+=60;
      else data= [today,...data];
      localStorage.pomodor = JSON.stringify(data)
      return {
        ...state,
          timer: state.timer + 60
      }
    default: return state
  }
}