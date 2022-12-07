import styles from './StatisticFocuse.module.scss'
import {Icons} from "../../UI/Icons/Icons";
import {IconsList} from "../../UI/Icons/IconsList";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {RootState} from "../../../Store/initialState";

interface IStatisticFocusProps {
  timer: number,
  timePause: number
}

export const StatisticFocus = ({timer, timePause}:IStatisticFocusProps) => {
  const [focus, setFocus] = useState( 0)
  useEffect(()=>{
    setFocus(Math.round(timer / (timer + timePause) * 100))
  }, [timer, timePause])
  return (
    <div className={styles.focus}>
      <div className={styles.focus_block}>
        <span className={styles.focus_block_text}>Фокус</span>
        <span className={styles.focus_block_number}>{focus? focus:'0'}%</span>
      </div>
      <Icons icon={IconsList.FocusIcon}/>
    </div>
  )
}