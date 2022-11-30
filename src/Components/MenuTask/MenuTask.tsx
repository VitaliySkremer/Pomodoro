import styles from './MenuTask.module.scss'
import {Added} from "./Added";
import {Decrease} from "./Decrease";
import {Delete} from "./Delete";
import {Edit} from "./Edit";

interface IMenuTaskProps {
  id: string;
  openModal: ()=>void;
  openEdit: ()=>void;
}

export const MenuTask = ({id, openModal,openEdit}: IMenuTaskProps) => {
  return (
    <ul className={styles.menu__list}>
      <Added id={id}/>
      <Decrease id={id}/>
      <Edit openEdit={openEdit}/>
      <Delete openModal={openModal}/>
    </ul>
  )
}