import { useState, useEffect } from 'react';
import "../../pages/GlobalStyles.css";

import Navbar from '../../components/Navbar';
import Navheader from '../../components/Navheader';
import Footer from '../../components/Footer';
import { Link, useNavigate} from 'react-router-dom';


const Packing = () => {
    const handlePrint = () => {
        
        window.print();
      };

  return (
    <div className='container'>
        <Navbar />
      <Navheader />
      <Footer />
    <div className='main'>
      <div>
        <h3>List of Packing</h3>
      </div>
      <table className='table'>
        <colgroup>
          <col width="5%" />
          <col width="10%" />
          <col width="10%" />
          <col width="10%" />
          <col width="10%" />
          <col width="10%" />
          <col width="10%" />
          <col width="10%" />
          <col width="5%" />
        </colgroup>
        <thead>
          <tr>
            <th className='thead'>#</th>
            <th className='thead'>Order Code</th>
            <th className='thead'>PO Code</th>
            <th className='thead'>Item Name</th>
            <th className='thead'>Box Size</th>
            <th className='thead'>Box No</th>
            <th className='thead'>Box Qty</th>
            <th className='thead'>Box Weight</th>
            <th className='thead'>Action</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
      <div className='buttons-row'>
      <Link  className="button-type" onClick={handlePrint}>
              Print
            </Link>
      </div>
    </div>
    </div>
  );
};

export default Packing;
