import React from "react";
import {
  StyledCustomButton,
  StyledCustomButton2,
  StyledCustomButton3,
} from "./styles";

interface CustomButtonProps extends React.HTMLProps<HTMLButtonElement> {
  type?: "2" | "3";
}

const CustomButton = ({
  children,
  type,
  ref,
  as,
  ...props
}: CustomButtonProps) => {
  switch (type) {
    case "2":
      return <StyledCustomButton2 {...props}>{children}</StyledCustomButton2>;
    case "3":
      return <StyledCustomButton3 {...props}>{children}</StyledCustomButton3>;
    default:
      return <StyledCustomButton {...props}>{children}</StyledCustomButton>;
  }
};

export default CustomButton;
