import styles from "./StatisticStop.module.scss";
import {Icons} from "../../UI/Icons/Icons";
import {IconsList} from "../../UI/Icons/IconsList";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {RootState} from "../../../Store/initialState";

interface IStatisticStopProps {
  stopCount: number
}

export const StatisticStop = ({stopCount}: IStatisticStopProps) => {

  return (
    <div className={styles.stop}>
      <div className={styles.stop_block}>
        <span className={styles.stop_block_text}>Остановки</span>
        <span className={styles.stop_block_number}>{stopCount}</span>
      </div>
      <Icons icon={IconsList.StopIcon}/>
    </div>
  )
}