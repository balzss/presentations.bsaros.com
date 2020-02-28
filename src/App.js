import React, { useState, useEffect } from 'react';

import { useLocation } from 'wouter';

import RenderPresentation from './presentations/RenderPresentation';

import './App.css';

function App() {
  const [ location, ] = useLocation();

  return (
    <div className="App">
      <RenderPresentation route={location} />
    </div>
  );
}

export default App;
