import styles from './StatisticFocuse.module.scss'
import {Icons} from "../../UI/Icons/Icons";
import {IconsList} from "../../UI/Icons/IconsList";

export const StatisticFocus = () => {
  return (
    <div className={styles.focus}>
      <div className={styles.focus_block}>
        <span className={styles.focus_block_text}>Фокус</span>
        <span className={styles.focus_block_number}>35 %</span>
      </div>
      <Icons icon={IconsList.FocusIcon}/>
    </div>
  )
}