import React, { useState } from 'react';
import { BsPerson } from 'react-icons/bs';
import "../pages/GlobalStyles.css";


function Navheader() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="navheader-container">
      <div>PSP</div>
      <div onClick={toggleDropdown}>
        <span>Nikhil</span>
        <BsPerson className="user-icon" />
        {isDropdownOpen && (
          <ul>
            <li>Profile</li>
            <li>Logout</li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default Navheader;
