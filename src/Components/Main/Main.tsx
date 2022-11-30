import {ReactNode} from "react";
import styles from './Main.module.scss'
export const Main = ({children}:{children: ReactNode}) => {
  return (
    <main className={[styles.main, 'container'].join(' ')}>
      {children}
    </main>
  )
}