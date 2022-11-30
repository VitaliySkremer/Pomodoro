import {useLayoutEffect, useState} from "react";

export enum Theme {
  light = 'light',
  dark = 'dark',
}

export const useTheme = () =>{
  const [theme, setTheme] = useState(localStorage.getItem('app-theme') || Theme.light)
  useLayoutEffect(()=>{
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('app-theme', theme)
  }, [theme])

  return {theme, setTheme}
}