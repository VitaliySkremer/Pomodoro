export enum DayWeek {
  Monday = 'Пн',
  Tuesday = 'Вт',
  Wednesday = 'Ср',
  Thursday = 'Чт',
  Friday = 'Пт',
  Saturday = 'Сб',
  Sunday = 'Вс',
}

export enum SelectList {
  now = 'Эта неделя',
  last = 'Прошедшая неделя',
  TwoAgo = '2 недели назад'
}

export const weekDay = [DayWeek.Sunday, DayWeek.Monday,DayWeek.Tuesday, DayWeek.Wednesday, DayWeek.Thursday, DayWeek.Friday ,DayWeek.Saturday];
export const Select:Array<SelectList> = [SelectList.now, SelectList.last, SelectList.TwoAgo]

const taskStorage:ITask[] = localStorage.getItem('tasks')? [...JSON.parse(localStorage.tasks)] : []
const totalTimeTaskStorage:number = localStorage.getItem('timeTick')? JSON.parse(localStorage.timeTick): 1500

export interface ITask {
  id: string;
  name: string;
  countPomodoro: number;
  focusPomodoro: number;
}

export interface ITaskTime {
  timeTick: number;
  timeShortPause: number;
  timeLongPause: number;
}

export type RootState = {
  tasks: ITask[];
  time: ITaskTime;
}

export const initialState: RootState = {
  tasks:taskStorage,
  time: {
    timeTick: totalTimeTaskStorage,
    timeLongPause: 1200,
    timeShortPause: 300,
  },
}