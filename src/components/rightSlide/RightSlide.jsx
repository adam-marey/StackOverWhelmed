import React from 'react';
import './RightSlide.css';
import { RiArrowRightUpFill } from 'react-icons/ri';
const RightSlide = () => {
  return (
    <div
      className="right-side-menu"
      style={{ height: '100vh', width: '30rem' }}
    >
      <div className="logo">
        <RiArrowRightUpFill style={{ marginTop: '9px' }} />
        <h2 className="title-section">Resources</h2>
      </div>
    </div>
  );
};

export default RightSlide;
