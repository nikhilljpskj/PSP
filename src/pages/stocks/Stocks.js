import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import "../../pages/GlobalStyles.css";

import Navbar from '../../components/Navbar';
import Navheader from '../../components/Navheader';
import Footer from '../../components/Footer';

function StockList() {

  return (
    <div className='container'>
      <Navbar />
      <Navheader />
      <Footer />
    <div className='main'>
      <div>
        <h3>List of Stocks</h3>
      </div>
      <div>
        <div>
          <table className='table'>
            <colgroup>
              <col width="5%" />
              <col width="20%" />
              <col width="20%" />
              <col width="40%" />
              <col width="15%" />
            </colgroup>
            <thead>
              <tr>
                <th className='thead'>#</th>
                <th className='thead'>Item Name</th>
                <th className='thead'>Supplier</th>
                <th className='thead'>Description</th>
                <th className='thead'>Available Stocks</th>
              </tr>
            </thead>
            <tbody>
             
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
            
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </div>
  );
};

export default StockList;
