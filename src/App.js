import React, { useState } from 'react';

import './App.css';
import ColorForm from './components/colorForm';
import ColorDisplay from './components/colorDisplay';

function App() {
  const [currentColor, setCurrentColor] = useState([]);
  const addNewBox = ( newBox ) => {
    setCurrentColor([...currentColor, newBox]);
  }

  return (
    <div className="App">
      <ColorForm onNewBox={ addNewBox }/>
      { currentColor.map(color => <ColorDisplay color={ color } /> )}
    </div>
  );
}

export default App;
