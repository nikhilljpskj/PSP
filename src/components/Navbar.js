import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { BsFillGridFill, BsFileEarmarkText, BsTruck, BsBag, BsArrowRepeat, BsBox, BsPerson, BsGear } from 'react-icons/bs';
import logo from '../assets/psp-logo.png';
import "../pages/GlobalStyles.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 1) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener('scroll', changeColor);

  return (
    <div className={color ? 'sidebar' : 'sidebar header'}>
      <div className="sidebar-logo">
        <a href="/home">
          <img src={logo} width={60} height={50} alt="logo" />
          <span className="logo-text">PSP INDIA</span>
        </a>
      </div>
      <div className="sidebar-menu">
        <div className="sidebar-menu-item">
          <Link to="/home">
            <BsFillGridFill className="icon" />
            <span className="sidebar-link">Dashboard</span>
          </Link>
        </div>
        <div className="sidebar-menu-item">
          <Link to="/purchase_order">
            <BsFileEarmarkText className="icon" />
            <span className="sidebar-link">Purchase Order</span>
          </Link>
        </div>
        <div className="sidebar-menu-item">
          <Link to="/customer_order">
            <BsTruck className="icon" />
            <span className="sidebar-link">Customer Order</span>
          </Link>
        </div>
        <div className="sidebar-menu-item">
          <Link to="/delivery">
            <BsBag className="icon" />
            <span className="sidebar-link">Delivery</span>
          </Link>
        </div>
        <div className="sidebar-menu-item">
          <Link to="/packing">
            <BsBox className="icon" />
            <span className="sidebar-link">Packing</span>
          </Link>
        </div>
        <div className="sidebar-menu-item">
          <Link to="/back_order">
            <BsArrowRepeat className="icon" />
            <span className="sidebar-link">Back Order</span>
          </Link>
        </div>
        <div className="sidebar-menu-item">
          <Link to="/receiving">
            <BsTruck className="icon" />
            <span className="sidebar-link">Receiving</span>
          </Link>
        </div>
        <div className="sidebar-menu-item">
          <Link to="/stocks">
            <BsBox className="icon" />
            <span className="sidebar-link">Stocks</span>
          </Link>
        </div>
        <div className="sidebar-menu-item">
          <Link to="/return">
            <BsArrowRepeat className="icon" />
            <span className="sidebar-link">Return</span>
          </Link>
        </div>
        <div className="sidebar-menu-item">Maintenance</div>
        <div className="sidebar-menu-item">
          <Link to="/supplier">
            <BsTruck className="icon" />
            <span className="sidebar-link">Supplier List</span>
          </Link>
        </div>
        <div className="sidebar-menu-item">
          <Link to="/customer">
            <BsPerson className="icon" />
            <span className="sidebar-link">Customer List</span>
          </Link>
        </div>
        <div className="sidebar-menu-item">
          <Link to="/item">
            <BsBox className="icon" />
            <span className="sidebar-link">Item List</span>
          </Link>
        </div>
        <div className="sidebar-menu-item">
          <Link to="/userlist">
            <BsPerson className="icon" />
            <span className="sidebar-link">User List</span>
          </Link>
        </div>
        <div className="sidebar-menu-item">
          <Link to="/settings">
            <BsGear className="icon" />
            <span className="sidebar-link">Settings</span>
          </Link>
        </div>
      </div>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: '#ffff' }} />
        ) : (
          <FaBars size={20} style={{ color: '#ffff' }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
