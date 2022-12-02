import React, {ReactNode} from "react";
import styles from './Main.module.scss'
import {FormCreateTask} from "../FormCreateTask/FormCreateTask";
import {FormTask} from "../FormTask/FormTask";
export const Main = () => {
  return (
    <div className={styles.main}>
      <FormCreateTask/>
      <FormTask/>
    </div>
  )
}