import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import "../../pages/GlobalStyles.css";

import Navbar from '../../components/Navbar';
import Navheader from '../../components/Navheader';
import Footer from '../../components/Footer';

function ReceiveManage() {
  
  const navigate = useNavigate();

  return (
    <div className="container">
      <Navbar />
      <Navheader />
      <Footer />
    <div className='main'>
      <div>
        <h3>
          Receive Order from  : 'Update Received Order'
        </h3>
      </div>
      <div>
        <form action="" id="receive-form">
          <input type="hidden" name="id" />
          <input type="hidden" name="from_order" />
          <input type="hidden" name="form_id" />

          <input type="hidden" name="po_id" />
          <div className='single-line-content'>
            
              
                <div>
                  <label>P.O. Code</label>
                  <input
                    type="text"
                   
                    readOnly
                  />
                </div>
             
                <div>
                  <label>B.O. Code</label>
                  <input
                    type="text"
                    
                    readOnly
                  />
                </div>
             
            
            <div>
              <div>
                <label>Supplier</label>
                <select id="supplier_id" name="supplier_id" className='inp-box'>
                  <option disabled selected></option>
                
                </select>
              </div>
            </div>
          </div>
          <hr />
          <table id="list" className='table'>
            <colgroup>
              <col width="5%" />
              <col width="10%" />
              <col width="10%" />
              <col width="25%" />
              <col width="25%" />
              <col width="25%" />
            </colgroup>
            <thead>
              <tr>
                <th className='thead'></th>
                <th className='thead'>Qty</th>
                <th className='thead'>Unit</th>
                <th className='thead'>Item</th>
                <th className='thead'>Cost</th>
                <th className='thead'>Total</th>
              </tr>
            </thead>
            <tbody>
             
                <tr>
                  <td>
                    <button type="button" className="rem_row">
                      <i className="fa fa-times"></i>
                    </button>
                  </td>
                  <td className="qty">
                    <input
                      type="number"
                      name="qty[]"
                      style={{ width: '50px !important' }}
                     
                      min="0"
                    />
                    <input
                      type="hidden"
                      name="item_id[]"
                     
                    />
                    <input type="hidden" name="unit[]" />
                    <input
                      type="hidden"
                      name="oqty[]"
                      
                    />
                    <input
                      type="hidden"
                      name="price[]"
                     
                    />
                    <input
                      type="hidden"
                      name="total[]"
                      
                    />
                  </td>
                  <td className="unit"></td>
                  <td className="item">
                    <br />
                    
                  </td>
                  <td className="cost"></td>
                  <td className="total"></td>
                </tr>
              
            </tbody>
            <tfoot>
              <tr>
                <th colSpan="5">Sub Total</th>
                <th className="sub-total">0</th>
              </tr>
              <tr>
                <th colSpan="5">
                  Discount{' '}
                  <input
                    style={{ width: '40px !important' }}
                    name="discount_perc"
                    className=""
                    type="number"
                    min="0"
                    max="100"
                  
                  />
                  %
                  <input
                    type="hidden"
                    name="discount"
                  
                  />
                </th>
                <th className="discount"></th>
              </tr>
              <tr>
                <th colSpan="5">
                  Tax{' '}
                  <input
                    style={{ width: '40px !important' }}
                    name="tax_perc"
                    className=""
                    type="number"
                    min="0"
                    max="100"
                   
                  />
                  %
                  <input
                    type="hidden"
                    name="tax"
                    
                  />
                </th>
                <th className="tax"></th>
              </tr>
              <tr>
                <th colSpan="5">
                  Total
                  <input
                    type="hidden"
                    name="amount"
                    
                  />
                </th>
                <th className="grand-total">0</th>
              </tr>
            </tfoot>
          </table>
          <div>
            <div>
              <label className="text-info">Remarks</label>
              <textarea
                name="remarks"
                id="remarks"
                rows="3"
                className="rounded-0"
                
              ></textarea>
            </div>
          </div>
        </form>
      </div>
      <div className="buttons-row">
            <Link to="#" className="button-type">Cancel</Link>
            <Link to="/customer_order/view_co" className="button-type" onClick={() => navigate('/customer_order/view_co')}>
              Save
            </Link>
          </div>
    </div>
    </div>
  );
};

export default ReceiveManage;
