import styles from './Graph.module.scss'
import {useEffect, useState} from "react";
import { DayWeek } from '../../../../Store/initialState';
import { ILocalStorage } from '../../../FormTask/InfoTask/InfoTask';

interface IGraphProps {
  time: ILocalStorage;
  radio: DayWeek;
  setRadio:(radio:DayWeek)=>void;
}

export const Graph = ({time,setRadio,radio}:IGraphProps) => {
  const [height, setHeight] = useState(0) //125 мин - 100%
  useEffect(()=>{
    setHeight(100 - (125 - Math.floor(time.timer / 60))/125 * 100);
  },[time])
  const clickHandler = (event: any) =>{
    setRadio(event.target.value);
  }
  return (
       <label className={styles.label} title={Math.floor(time.timer / 60).toString() + ' мин'}>
         <input
           type="radio"
           name="radio"
           value={time.day}
           onChange={clickHandler}
           checked={radio===time.day}
         />
         <div
           onClick={clickHandler}
           className={[styles.graph, time.timer!== 0 ? styles.graph__full:''].join(' ')}
           style={{height: height>=100 ? '100%': height=== 0 ? '5px':`${height}%`}}/>
         <span className={styles.label_text}>{time.day}</span>
       </label>
  )
}