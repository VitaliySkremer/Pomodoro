import styles from './StatisticFocuse.module.scss'
import {Icons} from "../../UI/Icons/Icons";
import {IconsList} from "../../UI/Icons/IconsList";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {RootState} from "../../../Store/initialState";

export const StatisticFocus = () => {
  const focus = useSelector<RootState, number>(state => Math.round(state.statistic.timer / (state.statistic.timer + state.statistic.timePause) * 100))

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