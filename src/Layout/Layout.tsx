import { RouteProps } from "react-router-dom";
import { Header } from "../Components/Header/Header"

interface ILayoutProps {
  children: RouteProps["children"];
}

export const Layout: React.FC<ILayoutProps> = (props: ILayoutProps) => {
  return <>
  <Header />
  {props.children}
  </>
}