import styles from './Select.module.scss'
import {Icons} from "../Icons/Icons";
import {IconsList} from "../Icons/IconsList";
import {useState} from "react";

interface ISelectProps {
  choose: string,
  list: Array<string>,
  setIsChoose: (choose: string)=>void,
}

export const Select = ({choose, list, setIsChoose}:ISelectProps) => {

  const [isActive, setIsActive] = useState(false);

  const chooseItem = (item: string) => (event:any) =>{
    setIsChoose(item)
    setIsActive(false);
  }

  return (
    <div className={styles.select__container}>
      <button onClick={()=>setIsActive(!isActive)} className={styles.button}>
        <span>{choose}</span>
        <div className={[styles.icon, isActive ? styles.icon__active: ''].join(' ')}>
          <Icons icon={IconsList.SelectIcon}/>
        </div>
      </button>
      <ul className={[styles.list, isActive ? styles.list_active:''].join(' ')}>
        {list.map(item=>
          item !== choose &&
            <li className={styles.item} key={item}>
              <button className={styles.button} onClick={chooseItem(item)}>
                {item}
              </button>
            </li>
        )}
      </ul>
    </div>
  )
}