import React from 'react';
import SideMenu from './components/SideMenu';
import Navbar from './components/Navbar';
import Home from './components/Home';

const App = () => {
  return (
    <div className="app-container">
      <SideMenu />
      <Home />
    </div>
  );
};

export default App;
