import Link from "next/link";
import React from "react";
import { StyledCustomLink } from "./styles";

const CustomLink = ({ children, href }) => {
  return (
    <Link passHref href={href}>
      <StyledCustomLink>{children}</StyledCustomLink>
    </Link>
  );
};

export default CustomLink;
