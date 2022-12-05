import styles from './StatisticFocuse.module.scss'
import {Icons} from "../../UI/Icons/Icons";
import {IconsList} from "../../UI/Icons/IconsList";
import {useEffect, useState} from "react";

export const StatisticFocus = () => {
  const [isActive, setIsActive] = useState(false);
  useEffect(()=>{
    setIsActive(true)
  })
  return (
    <div className={[styles.focus, isActive?styles.focus_active:''].join(' ')}>
      <div className={styles.focus_block}>
        <span className={styles.focus_block_text}>Фокус</span>
        <span className={styles.focus_block_number}>35%</span>
      </div>
      <Icons icon={IconsList.FocusIcon}/>
    </div>
  )
}