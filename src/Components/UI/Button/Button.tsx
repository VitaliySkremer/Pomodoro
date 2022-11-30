import styles from './Button.module.scss'
import {ButtonHTMLAttributes, FC, ReactNode} from "react";
interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  children: ReactNode;
  disabled?: boolean;
  isRed?: boolean;
  mr?: string;
  ml?: string;
  mt?: string;
  mb?: string;
}

export const Button:FC<IButtonProps> = ({
                                          children,
                                          disabled= false,
                                          isRed=false,
                                          mr='',
                                          mt='',
                                          mb='',
                                          ml='',
                                        ...other}) => {
  return (
    <button
      disabled={disabled}
      className={[styles.button, isRed ? styles.button__red : styles.button__light].join(' ')}
      style={{marginRight: mr,marginTop:mt, marginLeft:ml, marginBottom: mb}}
      {...other}
    >
      {children}
    </button>
  )
}