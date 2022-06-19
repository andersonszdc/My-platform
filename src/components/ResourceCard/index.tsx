import React from "react";
import DocumentIcon from "../../assets/Icons/Document";
import DownloadIcon from "../../assets/Icons/Download";
import theme from "../../styles/colors";
import { StyledResourceCard } from "./styles";

const ResourceCard = () => {
  return (
    <StyledResourceCard>
      <DocumentIcon size={32} fill={theme.black} />
      <div className="file">
        <p className="file__name">Competitiors analysis.pdf</p>
        <p className="file__size">56 Mb</p>
      </div>
      <button className="btn-download">
        <DownloadIcon size={24} fill={theme.black} />
      </button>
    </StyledResourceCard>
  );
};

export default ResourceCard;
