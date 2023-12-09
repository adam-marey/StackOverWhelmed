import React from 'react';
import { useParams } from 'react-router-dom';

const CategoryPage = () => {
  const { category } = useParams();

  return (
    <div className="home">
      <h2>
        {category} Page
      </h2>
    </div>
  );
};

export default CategoryPage;
