import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { BsPerson } from 'react-icons/bs';
import "../pages/GlobalStyles.css";

function Navheader() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate('/log');
  };

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      event.preventDefault();
      event.returnValue = '';
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  useEffect(() => {
    if (location.pathname === 'log') {
      navigate('/');
    }
  }, [location, navigate]);

  return (
    <div className="navheader-container">
      <div className="navheader-title">PSP</div>
      <div className="navheader-user" onClick={toggleDropdown}>
        <BsPerson className="user-icon" />
        <span>Admin</span>
        {isDropdownOpen && (
          <div className="dropdown-menu">
            <div className="dropdown-item"><Link to="/profile">Profile</Link></div>
            <div className="dropdown-item"><Link to="/log" onClick={handleLogout}>Logout</Link></div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navheader;
