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

export interface ITask {
  id: string;
  name: string;
  countPomodoro: number;
}

export interface ITaskTime {
  timeTick: number;
  timeShortPause: number;
  timeLongPause: number;
  pomodor: number
}

export interface IStatistic {
    timer: number;
    countPomodoro: number;
    focus: number;
    timePause: number;
    stopCount: number
}

export type RootState = {
  tasks: ITask[];
  time: ITaskTime;
  statistic: IStatistic;
  day: DayWeek
}

export const initialState: RootState = {
  tasks:[],
  time: {
    timeTick: 1500, //1500
    timeLongPause: 1200,
    timeShortPause: 300,
    pomodor: 1,
  },
  statistic: {
      timer: 0,
      countPomodoro: 0,
      focus: 0,
      timePause: 0,
      stopCount: 0,
  },
  day: weekDay[new Date().getDay()]
}