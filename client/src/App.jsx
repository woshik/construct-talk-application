import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import BaseRouter from './BaseRouter';

import './App.scss';

function App() {
  return (
    <Suspense fallback="">
      <BrowserRouter>
        <BaseRouter />
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
