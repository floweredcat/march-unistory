import { type RouteProps } from "react-router-dom";
import { Header } from "../Components/Header/Header";

type ILayoutProps = {
  children: RouteProps["children"];
};

export const Layout: React.FC<ILayoutProps> = (props: ILayoutProps) => (
  <>
    <Header />
    {props.children}
  </>
);
