import styles from './SwitchTheme.module.scss'
import {Theme, useTheme} from "../../../Hooks/useTheme";
import {useState} from "react";

export const SwitchTheme = () => {
  const {theme, setTheme} = useTheme();
  const [checked, setChecked] = useState(theme === Theme.light)

  const handleChange = () =>{
    setChecked(!checked)
    setTheme(checked ? Theme.dark: Theme.light)
  }
  return (
    <div className={styles.switch}>
      <input type="checkbox" checked={checked} onChange={handleChange} id="switch" className={styles.input}/><label className={styles.label} htmlFor="switch"></label>
    </div>
  )
}