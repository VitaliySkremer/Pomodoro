import styles from "./MenuTask.module.scss";
import {Icons} from "../UI/Icons/Icons";
import {IconsList} from "../UI/Icons/IconsList";

interface IDeleteProps {
  openModal: ()=>void
}

export const Delete = ({openModal}:IDeleteProps) => {

  const handleClick = () =>{
    openModal();
  }

  return (
    <li>
      <button onClick={handleClick} className={styles.button}><Icons icon={IconsList.DeleteIcon}/>Удалить</button>
    </li>
  )
}