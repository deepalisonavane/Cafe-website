import React from 'react';
import Topbar from './components/Topbar';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
    <Topbar/>
    </BrowserRouter>
  )
}

export default App;
