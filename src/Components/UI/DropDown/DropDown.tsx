import React, {ReactNode, useEffect, useState} from "react";
import styles from "./DropDown.module.scss";
import {DropDownMenu} from "./DropDownMenu/DropDownMenu";

interface IDropDownProps {
  button: ReactNode;
  children: ReactNode;
}

export const DropDown = ({button, children}: IDropDownProps) => {
  const [isDropdownOpen, setIsdropdownOpen] = useState(false);
  const handleOpen = (event: React.MouseEvent) =>{
    event.stopPropagation();
    setIsdropdownOpen(!isDropdownOpen);
  }

  const onClose = () =>{
    setIsdropdownOpen(false);
  }

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={handleOpen}>
        {button}
      </button>
      {isDropdownOpen && (
        <DropDownMenu onClose={onClose}>
          {children}
        </DropDownMenu>
      )}
    </div>
  )
}