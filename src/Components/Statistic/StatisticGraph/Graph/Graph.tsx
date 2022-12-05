import styles from './Graph.module.scss'
import {useEffect, useState} from "react";

interface IGraphProps {
  time: {
    day: string,
    value: number
  },
  radio: string;
  setRadio:(radio:string)=>void;
}

export const Graph = ({time,setRadio,radio}:IGraphProps) => {
  const [height, setHeight] = useState(0) //125 мин - 100%

  useEffect(()=>{
    setHeight(100 - (125 - Math.floor(time.value / 60))/125 * 100);
  },[])
  const clickHandler = (event: any) =>{
    setRadio(event.target.value);
  }
  return (
    <label className={styles.label} title={Math.floor(time.value / 60).toString() + ' мин'}>
        <input
          type="radio"
          name="radio"
          value={time.day}
          onChange={clickHandler}
        />
      <div
        onClick={clickHandler}
        className={[styles.graph, time.value!== 0 ? styles.graph__full:''].join(' ')}
        style={{height: height>=100 ? '100%': height=== 0 ? '5px':`${height}%`}}/>
        <span className={styles.label_text}>{time.day}</span>
      </label>
  )
}