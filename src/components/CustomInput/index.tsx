import Image from "next/image";
import React, { useEffect, useState } from "react";
import { StyledInput } from "./styles";

type CustomInputProps = {
  callback: (e: any) => void;
  value: string;
  type: "password" | "email";
};

const CustomInput = ({ callback, value, type }: CustomInputProps) => {
  const [fill, setFill] = useState(possibilities.email);
  useEffect(() => {
    switch (type) {
      case "email":
        setFill(possibilities.email);
        break;
      case "password":
        setFill(possibilities.password);
        break;
      default:
        console.log("field unavailable");
    }
  }, [setFill, type]);
  return (
    <>
      <StyledInput>
        <label>{fill.label}</label>
        <div className="customInput">
          <Image
            src={`/icons/${fill.icon}.svg`}
            alt={fill.alt}
            width={24}
            height={24}
          />
          <input
            name={fill.name}
            type={fill.type}
            onChange={callback}
            value={value}
            placeholder={fill.placeholder}
          />
        </div>
      </StyledInput>
    </>
  );
};

export default CustomInput;

const possibilities = {
  password: {
    label: "password",
    name: "password",
    type: "password",
    placeholder: "******",
    icon: "lock",
    alt: "ícone de cadeado",
  },
  email: {
    label: "email",
    name: "email",
    type: "text",
    placeholder: "anderson@gmail.com",
    icon: "message",
    alt: "ícone de carta",
  },
};
