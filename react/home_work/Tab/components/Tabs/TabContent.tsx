import React from "react";

interface TabContentProps {
  content: React.ReactNode;
}

export const TabContent: React.FC<TabContentProps> = ({ content }) => {
  return (
    <div style={{ padding: "20px", borderTop: "1px solid #ccc" }}>
      {content}
    </div>
  );
};
