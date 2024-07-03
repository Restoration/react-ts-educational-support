import React from 'react';
import './Dialog.css';

interface DialogProps {
  title: string;
  content: string;
  isOpen: boolean;
  onClose: () => void;
}

const Dialog: React.FC<DialogProps> = ({ title, content, isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="dialog-overlay">
      <div className="dialog">
        <div className="dialog-header">
          <h2>{title}</h2>
          <button onClick={onClose}>Close</button>
        </div>
        <div className="dialog-content">
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default Dialog;