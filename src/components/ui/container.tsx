import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

function Container({ children, className = "" }: ContainerProps) {
  return <div className={`mx-auto w-10/12 ${className}`}>{children}</div>;
}

export default Container;
