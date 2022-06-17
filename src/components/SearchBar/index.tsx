import Image from "next/image";
import React from "react";
import { StyledSearchBar } from "./styles";

const SearchBar: React.FC = () => {
  return (
    <StyledSearchBar>
      <Image src="/icons/research.svg" width={24} height={24} alt="icon" />
      <input placeholder="Pesquise algo..." />
    </StyledSearchBar>
  );
};

export default SearchBar;
