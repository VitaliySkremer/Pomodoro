import styles from './Header.module.scss'
import {SwitchTheme} from "../UI/SwitchTheme/SwitchTheme";
import {Logo} from "./Logo/Logo";
import {Icons} from "../UI/Icons/Icons";
import {IconsList} from "../UI/Icons/IconsList";
import {Link} from "react-router-dom";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header_container}>
          <Link to='/' className={styles.logo__block}>
            <Logo/>
            <span className={styles.logo__block_text}>pomodoro_box</span>
          </Link>
          <div className={styles.right__block}>
            <Link to="/statistic" className={styles.statistic}>
              <Icons icon={IconsList.StatisticIcon}/>
              <span className={styles.statistic_text}>
                Статистика
              </span>
            </Link>
            <SwitchTheme/>
          </div>
        </div>
      </div>
    </header>
  )
}