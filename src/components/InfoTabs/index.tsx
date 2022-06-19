import React, { useState } from "react";
import ResourceCard from "../ResourceCard";
import { StyledInfoContents, StyledInfoTab, StyledInfoTabs } from "./styles";

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
      <StyledInfoContents>
        {currentTab === "" && (
          <div className="notes">
            <p>Aula sobre tipografias com o Anderson.</p>
          </div>
        )}
        {currentTab === "resources" && (
          <div className="resource-cards">
            <ResourceCard />
            <ResourceCard />
          </div>
        )}
      </StyledInfoContents>
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
