import ReactDOM from "react-dom";
import styles from './Modal.module.scss'
import {ReactNode, useEffect, useState} from "react";

interface IModalProps {
  children: ReactNode;
  id: string;
  onClose?: ()=> void;
}

export const Modal = (props:IModalProps) => {
  const [isCreated, SetIsCreated] = useState(false)
  const modal = document.getElementById('modal');
  if(!modal) return null;

  useEffect(()=>{
    SetIsCreated(true)
  },[])
  return ReactDOM.createPortal((
    <div className={[styles.modal, isCreated ? styles.modal_created :''].join(' ')}>
      <div className={[styles.modal_body, isCreated? styles.modal_body_created:''].join(' ')}>
        {props.children}
      </div>
    </div>
  ) ,modal)
}