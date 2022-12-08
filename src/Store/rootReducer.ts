import {initialState, ITask, RootState} from "./initialState";
import {Actions} from "./Actions";
import {ActionCreator, Reducer} from "redux";
import {
  TypeAddMinute,
  TypeDeleteMinute,
  TypeEditPomodor,
  TypeEditTask,
  TypeTaskAdd,
  TypeTaskAddPomodoro,
  TypeTaskDelete,
  TypeTaskDeletePomodoro
} from "./Types/TypeTask";


export const taskAdd: ActionCreator<TypeTaskAdd> = (task:ITask)=>({
  type: Actions.ADD_TASK,
  task,
})
export const taskDelete: ActionCreator<TypeTaskDelete> = (id: string)=>({
  type: Actions.DELETE_TASK,
  id,
})
export const taskAddPomodoro: ActionCreator<TypeTaskAddPomodoro> = (id: string)=>({
  type: Actions.ADD_POMODORO,
  id,
})
export const taskDeletePomodoro: ActionCreator<TypeTaskDeletePomodoro> = (id: string)=>({
  type: Actions.DELETE_POMODORO,
  id,
})
export const addMinuteTick: ActionCreator<TypeAddMinute> = ()=>({
  type: Actions.ADD_MINUTE,
})
export const deleteMinuteTick: ActionCreator<TypeDeleteMinute> = ()=>({
  type: Actions.DELETE_MINUTE,
})
export const editTask: ActionCreator<TypeEditTask> = (id:string,value: string)=>({
  type: Actions.EDIT_TASK,
  id,
  value
})
export const editPomodor: ActionCreator<TypeEditPomodor> = ()=>({
  type: Actions.EDIT_POMODOR,
})

type MyType = TypeTaskAdd
  | TypeTaskDelete
  | TypeTaskAddPomodoro
  | TypeTaskDeletePomodoro
  | TypeAddMinute
  | TypeDeleteMinute
  | TypeEditTask
  | TypeEditPomodor

export const rootReducer:Reducer<RootState, MyType> = (state = initialState, action) =>{

  switch (action.type){
    case Actions.ADD_TASK:
      localStorage.tasks = JSON.stringify([...state.tasks, action.task]);
      return {
        ...state,
        tasks: [...state.tasks, action.task]
      }
    case Actions.DELETE_TASK :
      localStorage.tasks = JSON.stringify(state.tasks.filter(item=> item.id !== action.id));
      return {
        ...state,
        tasks: state.tasks.filter(item=> item.id !== action.id)
      }
    case Actions.ADD_POMODORO :
      localStorage.tasks = JSON.stringify(state.tasks.map(item=> item.id === action.id ? {...item, countPomodoro: item.countPomodoro + 1} : item));
      return {
        ...state,
        tasks: state.tasks.map(item=> item.id === action.id ? {...item, countPomodoro: item.countPomodoro + 1} : item)
      }
    case Actions.DELETE_POMODORO:
      localStorage.tasks = JSON.stringify(state.tasks.map(item=> item.id === action.id ? {...item, countPomodoro: item.countPomodoro - 1} : item));
      return {
        ...state,
        tasks: state.tasks.map(item=> item.id === action.id ? {...item, countPomodoro: item.countPomodoro - 1} : item)
      }
    case Actions.ADD_MINUTE :
      localStorage.timeTick = JSON.stringify(state.time.timeTick + 60);
      return {
        ...state,
        time: {...state.time, timeTick: state.time.timeTick + 60}
      }
    case Actions.DELETE_MINUTE :
      localStorage.timeTick = JSON.stringify(state.time.timeTick - 60);
      return {
        ...state,
        time: {...state.time, timeTick: state.time.timeTick - 60}
      }
    case Actions.EDIT_TASK :
      localStorage.tasks = JSON.stringify(state.tasks.map(item=> item.id===action.id? {...item, name: action.value}:item));
      return {
        ...state,
        tasks: state.tasks.map(item=> item.id===action.id? {...item, name: action.value}:item)
      }
    case Actions.EDIT_POMODOR:
      localStorage.tasks = JSON.stringify(state.tasks.map((item, index)=>index===0? {...item, focusPomodoro: item.focusPomodoro + 1}:item));
      return {
        ...state,
        tasks: state.tasks.map((item, index)=>index===0? {...item, focusPomodoro: item.focusPomodoro + 1}:item)
      }
    default: return state
  }
}