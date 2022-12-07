import styles from "./StatisticPause.module.scss";
import {Icons} from "../../UI/Icons/Icons";
import {IconsList} from "../../UI/Icons/IconsList";
import {useSelector} from "react-redux";
import {RootState} from "../../../Store/initialState";
import {useEffect, useState} from "react";

interface IStatisticPauseProps {
  timePause: number
}

export const StatisticPause = ({timePause}:IStatisticPauseProps) => {
  const [pause, setPause] = useState(0)

  useEffect(()=>{
    setPause(Math.floor(timePause / 60))
  }, [timePause])

  return (
    <div className={styles.pause}>
      <div className={styles.pause_block}>
        <span className={styles.pause_block_text}>Время на паузе</span>
        <span className={styles.pause_block_number}>{pause}м</span>
      </div>
      <Icons icon={IconsList.PauseIcon}/>
    </div>
  )
}