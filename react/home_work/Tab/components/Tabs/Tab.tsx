interface TabProps {
  index: number;
  label: string;
  isActive: boolean;
  onActivateTab: (index: number) => void;
}

export const Tab: React.FC<TabProps> = ({
  index,
  label,
  isActive,
  onActivateTab,
}) => {
  return (
    <button
      style={{
        padding: "10px",
        cursor: "pointer",
        fontWeight: isActive ? "bold" : "normal",
      }}
      onClick={() => onActivateTab(index)}
    >
      {label}
    </button>
  );
};
