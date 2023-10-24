import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import { HomePage } from './pages';

function App() {
  return (
    <BrowserRouter>
      <HomePage />
    </BrowserRouter>
  );
}

export default App;
