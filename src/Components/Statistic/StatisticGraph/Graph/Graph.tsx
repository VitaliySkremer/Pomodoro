import styles from './Graph.module.scss'
import {useEffect, useState} from "react";

interface IGraphProps {
  time: {
    day: string,
    value: number
  },
  radio: string;
}

export const Graph = ({time,radio}:IGraphProps) => {
  const [height, setHeight] = useState(0) //125 мин - 100%
  useEffect(()=>{
    setHeight(100 - (125 - Math.floor(time.value / 60))/125 * 100);
  },[])
  return (
    <div
      className={[styles.graph, time.value!== 0 ? styles.graph__full:'', radio===time.day?styles.graph__active:''].join(' ')}
      style={{height: height>=100 ? '100%': height=== 0 ? '5px':`${height}%`}}/>
  )
}