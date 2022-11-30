import styles from "./MenuTask.module.scss";
import {Icons} from "../UI/Icons/Icons";
import {IconsList} from "../UI/Icons/IconsList";

interface IEditProps {
  openEdit: ()=>void;
}

export const Edit = ({openEdit}: IEditProps) => {
  return (
    <li>
      <button className={styles.button} onClick={openEdit}><Icons icon={IconsList.EditIcon}/>Редактировать</button>
    </li>
  )
}