import React from 'react';
import './Home.css';

const Home = ({ selectedCategory }) => {
  return (
    <div className="home">
      <h2 className="animate-text">
        {selectedCategory
          ? `Selected Category: ${selectedCategory}`
          : 'To succeed in a technical interview, focus on practicing problems with common patterns, as mastering these patterns simplifies solving various challenges.'}
      </h2>
    </div>
  );
};

export default Home;
