import React, { useState } from 'react';
import Dialog from './Dialog';

const App: React.FC = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <div>
      <button onClick={handleOpenDialog}>Open Dialog</button>
      <Dialog
        title="Example Dialog"
        content="This is an example dialog."
        isOpen={isDialogOpen}
        onClose={handleCloseDialog}
      />
    </div>
  );
};

export default App;