import React, { useState } from "react";
import { TabData } from "../App";
import { Tab } from "./Tab";
import { TabContent } from "./TabContent";

interface TabsProps {
  tabsData: TabData[];
}

export const Tabs: React.FC<TabsProps> = ({ tabsData }) => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <>
      <div>
        {tabsData.map((tab, index) => (
          <Tab
            key={index}
            index={index}
            label={tab.label}
            isActive={activeTab === index}
            onActivateTab={setActiveTab}
          />
        ))}
      </div>
      <TabContent content={tabsData[activeTab].content} />
    </>
  );
};
