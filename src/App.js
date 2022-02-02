import React, { useState } from 'react';
import Header from './Components/Ui/Header';
import Line from './Components/Ui/Line';
import Intro from './Intro';
import SpreadRoles from './SpreadRoles';
import RoleProvider from './context/RoleProvider';
function App() {
  const [isSpreadStart, setIsSpreadStart] = useState(false);
  const gameSpreadHanler = (spreadRole) => {
    setIsSpreadStart(spreadRole);
  };
  const restartHandler = (isReset) => {
    setIsSpreadStart(isReset);
  }
  return (
    <RoleProvider>
      <Header onClick={restartHandler} />
      {!isSpreadStart && <Intro onClick={gameSpreadHanler} />}
      {isSpreadStart && <SpreadRoles />}
      <Line width="130px" height="10px" position="fixed" bottom="-6px" left="50%" />
    </RoleProvider>
  );
}

export default App;
