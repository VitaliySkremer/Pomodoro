import {ReactNode} from "react";

interface ILayoutProps {
  children: ReactNode;
}

export const Layout = ({children}: ILayoutProps) => {
  return (
    <div>
      {children}
    </div>
  )
}