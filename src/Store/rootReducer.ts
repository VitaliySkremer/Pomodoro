import {initialState, ITask, RootState} from "./initialState";
import {Actions} from "./Actions";
import {ActionCreator, Reducer} from "redux";
import {
  TypeAddMinute,
  TypeDeleteMinute,
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

type MyType = TypeTaskAdd | TypeTaskDelete | TypeTaskAddPomodoro | TypeTaskDeletePomodoro | TypeAddMinute | TypeDeleteMinute | TypeEditTask;

export const rootReducer:Reducer<RootState, MyType> = (state = initialState, action) =>{
  switch (action.type){
    case Actions.ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.task]
      }
    case Actions.DELETE_TASK :
      return {
        ...state,
        tasks: state.tasks.filter(item=> item.id !== action.id)
      }
    case Actions.ADD_POMODORO :
      return {
        ...state,
        tasks: state.tasks.map(item=> item.id === action.id ? {...item, countPomodoro: item.countPomodoro + 1} : item)
      }
    case Actions.DELETE_POMODORO:
      return {
        ...state,
        tasks: state.tasks.map(item=> item.id === action.id ? {...item, countPomodoro: item.countPomodoro - 1} : item)
      }
    case Actions.ADD_MINUTE :
      return {
        ...state,
        time: {...state.time, timeTick: state.time.timeTick + 60}
      }
    case Actions.DELETE_MINUTE :
      return {
        ...state,
        time: {...state.time, timeTick: state.time.timeTick - 60}
      }
    case Actions.EDIT_TASK :
      return {
        ...state,
        tasks: state.tasks.map(item=> item.id===action.id? {...item, name: action.value}:item)
      }
    default: return state
  }
}