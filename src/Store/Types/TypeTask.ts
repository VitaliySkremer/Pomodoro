import {Actions} from "../Actions";
import {ITask} from "../initialState";

export type TypeTaskAdd = {
  type: typeof Actions.ADD_TASK,
  task: ITask,
}
export type TypeTaskDelete = {
  type: typeof Actions.DELETE_TASK,
  id: string,
}
export type TypeTaskAddPomodoro = {
  type: typeof Actions.ADD_POMODORO,
  id: string,
}
export type TypeTaskDeletePomodoro = {
  type: typeof Actions.DELETE_POMODORO,
  id: string,
}
export type TypeAddMinute = {
  type: typeof Actions.ADD_MINUTE,
}
export type TypeDeleteMinute = {
  type: typeof Actions.DELETE_MINUTE,
}
export type TypeEditTask = {
  type: typeof Actions.EDIT_TASK,
  id:string,
  value: string
}

export type TypeEditPomodor = {
  type: typeof Actions.EDIT_POMODOR,
}