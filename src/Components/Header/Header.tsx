import styles from './Header.module.scss'
import {SwitchTheme} from "../UI/SwitchTheme/SwitchTheme";
import {Logo} from "./Logo/Logo";
import {Icons} from "../UI/Icons/Icons";
import {IconsList} from "../UI/Icons/IconsList";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header_container}>
          <a className={styles.logo__block} href="/">
            <Logo/>
            <span className={styles.logo__block_text}>pomodoro_box</span>
          </a>
          <div className={styles.right__block}>
            <a href="/" className={styles.statistic}>
              <Icons icon={IconsList.StatisticIcon}/>
              <span className={styles.statistic_text}>
                Статистика
              </span>
            </a>
            <SwitchTheme/>
          </div>
        </div>
      </div>
    </header>
  )
}