export interface ITask {
  id: string;
  name: string;
  countPomodoro: number;
}

export interface ITaskTime {
  timeTick: number;
  timeShortPause: number;
  timeLongPause: number;
}

export type RootState = {
  tasks: ITask[];
  time: ITaskTime
}

export const initialState: RootState = {
  tasks:[],
  time: {
    timeTick: 1500, //1500
    timeLongPause: 1200,
    timeShortPause: 300,
  }
}