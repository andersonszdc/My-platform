import React, { useState } from "react";
import { StyledInfoTab, StyledInfoTabs } from "./styles";

const InfoTabs = () => {
  const [currentTab, setCurrentTab] = useState("");

  return (
    <>
      <StyledInfoTabs>
        <InfoTab onClick={() => setCurrentTab("")} active={currentTab === ""}>
          Notes
        </InfoTab>
        <InfoTab
          onClick={() => setCurrentTab("resources")}
          active={currentTab === "resources"}
        >
          Resources
        </InfoTab>
      </StyledInfoTabs>
      {currentTab === "" && <div>notes</div>}
      {currentTab === "resources" && <div>resources</div>}
    </>
  );
};

export default InfoTabs;

type InfoTabProps = {
  children: React.ReactNode;
  active?: boolean;
  onClick: () => void;
};

const InfoTab = ({ children, active, onClick }: InfoTabProps) => {
  return (
    <StyledInfoTab onClick={onClick}>
      {children}
      {active && <span className="underline" />}
    </StyledInfoTab>
  );
};
