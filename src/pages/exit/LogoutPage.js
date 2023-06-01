import React from 'react';
import { Link } from 'react-router-dom';
import "../../pages/GlobalStyles.css";

const LogoutPage = () => {
  return (
    <div className="logext">
      
        <h1 className="log-heading">PSP India</h1>
      
      <div className="log-content center">
        <p className="log-content">Logged out successfully. <Link to="/">Click here!!!</Link> to login back.</p>
      </div>
    </div>
  );
};

export default LogoutPage;
