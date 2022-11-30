import styles from './ButtonAdd.module.scss'
import {ButtonHTMLAttributes, ReactNode} from "react";

interface IButtonCalcProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  children: ReactNode
}

export const ButtonCalc = ({children, ...other}: IButtonCalcProps) => {

  return (
      <button {...other} className={styles.button}>
        {children}
      </button>
    )
}