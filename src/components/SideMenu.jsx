import React, { useState } from 'react';
import './SideMenu.css';
import { BsCodeSquare } from 'react-icons/bs';
import { MdOutlineDataArray } from 'react-icons/md';
import { AiOutlineFieldString } from 'react-icons/ai';
import { PiGraphFill } from 'react-icons/pi';
import { TbBinaryTree } from 'react-icons/tb';
import { TbBinaryTree2 } from 'react-icons/tb';
import { IoSearch } from 'react-icons/io5';
import { FaBoxes } from 'react-icons/fa';
import { FaSortAlphaDown } from 'react-icons/fa';
import { BiConfused } from 'react-icons/bi';
import { BsStack } from 'react-icons/bs';
import { MdOutlineElderlyWoman } from 'react-icons/md';
import { Link } from 'react-router-dom';
function SideMenu() {
  const [activeCategory, setActiveCategory] = useState('Text');
  const categories = [
    { name: 'Arrays', icon: <MdOutlineDataArray /> },
    { name: 'Strings', icon: <AiOutlineFieldString /> },
    { name: 'Stacks', icon: <BsStack /> },
    { name: 'Linked Lists', icon: <FaBoxes /> },
    { name: 'Graphs', icon: <PiGraphFill /> },
    { name: 'Binary Search trees', icon: <TbBinaryTree /> },
    { name: 'Binary Trees', icon: <TbBinaryTree2 /> },
    { name: 'Searching', icon: <IoSearch /> },
    { name: 'Sorting', icon: <FaSortAlphaDown /> },
    { name: 'Recursion', icon: <BiConfused /> },
    { name: 'Make your grandma proud', icon: <MdOutlineElderlyWoman /> }
  ];
  const handleCategoryClick = category => {
    setActiveCategory(category);
    //logic for later
  };
  return (
    <div className="side-menu" style={{ height: '100vh' }}>
      <div className="logo">
        <BsCodeSquare style={{ marginTop: '13px' }} />
        <h2 className="title">StackOverWhelmed</h2>
      </div>
      <ul>
        {categories.map((category, index) =>
          <li key={index}>
            <div style={{ display: 'flex' }}>
              <p style={{ marginBottom: '1px', marginRight: '10px' }}>
                {category.icon}
              </p>
              <Link to={`/${category.name}`} className="category-link">
                {category.name}
              </Link>
            </div>
          </li>
        )}
      </ul>
    </div>
  );
}

export default SideMenu;
