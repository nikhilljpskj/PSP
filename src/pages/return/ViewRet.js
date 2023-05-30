import React from 'react';
import { Link, } from 'react-router-dom';

import "../../pages/GlobalStyles.css";

import Navbar from '../../components/Navbar';
import Navheader from '../../components/Navheader';
import Footer from '../../components/Footer';

function ReturnRecord () {

  return (
    <div className='container'>
        <Navbar />
      <Navheader />
      <Footer />
    <div className='main'>
      <div>
        <h3>Return Record - </h3>
      </div>
      <div id="print_out">
        <div className='single-line-content'>
          <div>
            <label>Return Code</label>
            <div></div>
          </div>
          <div>
            <div>
              <label>Supplier</label>
              <div></div>
            </div>
          </div>
        </div>
        <h4>Items</h4>
        <table className='table'>
          <colgroup>
            <col width="10%" />
            <col width="10%" />
            <col width="30%" />
            <col width="25%" />
            <col width="25%" />
          </colgroup>
          <thead>
            <tr>
              <th className='thead'>Qty</th>
              <th className='thead'>Unit</th>
              <th className='thead'>Item</th>
              <th className='thead'>Cost</th>
              <th className='thead'>Total</th>
            </tr>
          </thead>
          <tbody>
            
              <tr>
                <td></td>
                <td></td>
                <td>
                   <br />
                  
                </td>
                <td></td>
                <td></td>
              </tr>
           
          </tbody>
          <tfoot>
            <tr>
              <th>Total</th>
              <th colSpan="4"></th>
            </tr>
          </tfoot>
        </table>
        <div>
          <div>
            <label>Remarks</label>
            <p></p>
          </div>
        </div>
      </div>
      <div className="buttons-row">
            <Link id="print" className="button-type">Print</Link>
            <Link href="#" className="button-type">Edit</Link>
            <Link href="#" className="button-type">Back To List</Link>
          </div>
    </div>
    </div>
  );
};

export default ReturnRecord;
