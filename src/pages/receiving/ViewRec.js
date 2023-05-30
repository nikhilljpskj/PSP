import React from 'react';
import { Link, } from 'react-router-dom';

import "../../pages/GlobalStyles.css";

import Navbar from '../../components/Navbar';
import Navheader from '../../components/Navheader';
import Footer from '../../components/Footer';

function ReceivedView() {
    
  return (
    <div className="container">
      <Navbar />
      <Navheader />
      <Footer />
    <div className='main'>
      <div>
        <h3>Received Order Details - </h3>
      </div>
      <div id="print_out">
        <div className='single-line-content'>
          <div>
            <label>FROM P.O. Code</label>
            <div></div>
          </div>
          <div>
            <div>
              <label>Supplier</label>
              <div></div>
            </div>
          </div>
         
            <div>
              <label>FROM B.O. Code</label>
              <div></div>
            </div>
          
        </div>
        <h3>Orders</h3>
        <table id="list" className='table'>
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
              <th colSpan="4">Sub Total</th>
              <th></th>
            </tr>
            <tr>
              <th colSpan="4">Discount %</th>
              <th></th>
            </tr>
            <tr>
              <th colSpan="4">Tax%</th>
              <th></th>
            </tr>
            <tr>
              <th colSpan="4">Total</th>
              <th></th>
            </tr>
          </tfoot>
        </table>
        <div>
          <div>
            <label>Remarks</label>
            <p></p>
          </div>
        </div>
      
          <div>
            <span></span>
          </div>
        
      </div>
      <div className="buttons-row">
            <Link id="print" className="button-type">Print</Link>
            <Link href="#" className="button-type">Edit</Link>
            <Link href="#" className="button-type">Back To List</Link>
          </div>
      <table id="clone_list">
        <tr>
          <td>
            <button type="button">X</button>
          </td>
          <td>
            <span></span>
            <input type="hidden" name="item_id[]" />
            <input type="hidden" name="unit[]" />
            <input type="hidden" name="qty[]" />
            <input type="hidden" name="price[]" />
            <input type="hidden" name="total[]" />
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </table>
    </div>
    </div>
  );
};

export default ReceivedView;
