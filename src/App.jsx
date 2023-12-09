import React, { useState } from 'react';
import SideMenu from './components/SideMenu';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import CategoryPage from './components/CategoryPage';
import ArraysPage from './components/Topics/ArraysPage';
import Strings from './components/Topics/Strings';
const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryChange = category => {
    setSelectedCategory(category);
  };

  return (
    <div className="app-container">
      <SideMenu onCategoryChange={handleCategoryChange} />
      <Routes>
        <Route path="/:category" element={<CategoryPage />} />
        <Route path="/arrays" element={<ArraysPage />} />
        <Route path="/strings" element={<Strings />} />
        <Route
          path="/"
          element={<Home selectedCategory={selectedCategory} />}
        />
      </Routes>
    </div>
  );
};

export default App;
