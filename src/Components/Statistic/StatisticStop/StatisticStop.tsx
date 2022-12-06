import styles from "./StatisticStop.module.scss";
import {Icons} from "../../UI/Icons/Icons";
import {IconsList} from "../../UI/Icons/IconsList";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {RootState} from "../../../Store/initialState";

export const StatisticStop = () => {
  const stop = useSelector<RootState, number>(state => state.statistic.stopCount)
  return (
    <div className={styles.stop}>
      <div className={styles.stop_block}>
        <span className={styles.stop_block_text}>Остановки</span>
        <span className={styles.stop_block_number}>{stop}</span>
      </div>
      <Icons icon={IconsList.StopIcon}/>
    </div>
  )
}