import { ReactNode, useEffect, useRef } from "react";
import styles from "./DropDownMenu.module.scss"
interface IDropDownProps {
  children: ReactNode;
  onClose: ()=> void;
}

export const DropDownMenu = ({children, onClose}:IDropDownProps) => {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(()=>{
    function handleClick(event: MouseEvent){
      if(event.target instanceof Node && !ref.current?.contains(event.target)){
        onClose();
      }
    }
    document.addEventListener('click', handleClick);
    return () =>{
      document.removeEventListener('click', handleClick);
    }
  },[])

  return (
      <div ref={ref} className={styles.list}>
        {children}
      </div>
  )
}