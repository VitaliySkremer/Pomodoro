import styles from './Input.module.scss'
import {InputHTMLAttributes} from "react";
interface IInputProps extends InputHTMLAttributes<HTMLInputElement>{
  placeholder?: string;
}

export const Input = ({placeholder='', ...other}:IInputProps) => {
  return (
    <input className={styles.input} {...other} type="text" placeholder={placeholder}/>
  )
}