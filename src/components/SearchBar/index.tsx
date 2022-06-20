import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { StyledSearchBar } from "./styles";

const SearchBar: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <StyledSearchBar onClick={() => inputRef.current.focus()}>
      <Image src="/icons/research.svg" width={24} height={24} alt="icon" />
      <input ref={inputRef} placeholder="Pesquise algo..." />
    </StyledSearchBar>
  );
};

export default SearchBar;
