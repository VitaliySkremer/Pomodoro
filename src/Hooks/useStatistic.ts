import {useEffect, useState} from "react";
import {DayWeek, Select, SelectList, weekDay} from "../Store/initialState";

export const WeekDays = ['Пн','Вт','Ср','Чт','Пт','Сб','Вс']

export interface IStatistic {
  id: string,
  day: string,
  countPomodoro: number,
  stopCount: number,
  timePause: number,
  timer: number
}

function getArrTimeDay (isChoose:SelectList) {

  let localData:IStatistic[] = []
  if(localStorage.getItem('pomodor')){
    localData = JSON.parse(localStorage.pomodor);
    if(isChoose === SelectList.now) localData.length = new Date().getDay();
    else if(isChoose === SelectList.last) localData = localData.slice(6,13)
    else  localData = localData.splice(14,21)

    localData = localData.filter(item=> item!==null)
    localData.reverse();
  }

  const result:IStatistic[] = Array.from(Array(7), (item,index)=>{
    return {day:WeekDays[index], timer: 0, id: WeekDays[index].toString(), countPomodoro: 0, stopCount: 0, timePause: 0}
  })
  return result.map((item:IStatistic) => localData.find(element => element.day === item.day) ? localData.find(element => element.day === item.day) : item) as IStatistic[]
}

export const useStatistic = () =>{
  const [isChoose, setIsChoose] = useState(SelectList.now)
  const [selectList] = useState(()=> Select)
  const [radio, setRadio] = useState<DayWeek>(weekDay[new Date().getDay()]);
  const [arrTimeDay, setArrTimeDay] = useState(()=>getArrTimeDay(isChoose))
  const [selectDay, setSelectDay] = useState(arrTimeDay.find(item=>item.day===radio))

  useEffect(()=>{
    setArrTimeDay(()=>getArrTimeDay(isChoose))
  }, [isChoose])

  useEffect(()=>{
    setSelectDay(arrTimeDay.find(item=>item.day===radio));
  },[radio, arrTimeDay])


  return {isChoose, setIsChoose, selectList, selectDay, radio, setRadio ,arrTimeDay};
}