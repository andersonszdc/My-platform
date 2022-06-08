import Image from "next/image";
import React from "react";
import { StyledInput } from "./styles";

interface CustomInputProps extends React.HTMLProps<HTMLInputElement> {
  customType?: "password" | "email";
  icon?: "message" | "lock" | "account";
  label: string;
}

const CustomInput = ({
  icon,
  label,
  customType,
  ...props
}: CustomInputProps) => {
  return (
    <>
      <StyledInput>
        <label>{label}</label>
        <div className="customInput">
          <Image src={`/icons/${icon}.svg`} alt="icon" width={24} height={24} />
          <input {...props} />
        </div>
      </StyledInput>
    </>
  );
};

export default CustomInput;
