import React, { ReactNode, HTMLAttributes } from "react";

interface ErrorProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const Error: React.FC<ErrorProps> = ({ children, ...props }) => {
  return (
    <div
      style={{ color: "#f23838", textAlign: "start", margin: "0.5rem 0" }}
      {...props}
    >
      {children}
    </div>
  );
};

export default Error;
