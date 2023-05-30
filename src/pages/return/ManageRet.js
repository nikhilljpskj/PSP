import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import "../../pages/GlobalStyles.css";

import Navbar from '../../components/Navbar';
import Navheader from '../../components/Navheader';
import Footer from '../../components/Footer';


function ReturnForm () {
    const navigate = useNavigate();
  return (
    <div className='container'>
        <Navbar />
      <Navheader />
      <Footer />
    <div className='main'>
      <div>
        <h4>Return Details  : 'Create New Return Record'</h4>
      </div>
      <div>
        <form id="return-form">
          <input type="hidden" name="id"  />
          <div className='songle-row-content'>
            <div>
              <label>Return Code</label>
              <input type="text"  readOnly />
            </div>
            <div>
              <div>
                <label htmlFor="supplier_id">Supplier</label>
                <select name="supplier_id" id="supplier_id" >
                  <option disabled></option>
                 
                    <option></option>
                 
                </select>
              </div>
            </div>
          </div>
          <hr />
          <fieldset>
            <legend>Item Form</legend>
            <div>
              <div>
                <label htmlFor="item_id">Item</label>
                <select id="item_id">
                  <option disabled selected></option>
                </select>
              </div>
              <div>
                <div>
                  <label htmlFor="unit">Unit</label>
                  <input type="text" id="unit" />
                </div>
              </div>
              <div>
                <div>
                  <label htmlFor="qty">Qty</label>
                  <input type="number" step="any" id="qty"  />
                </div>
              </div>
              <div>
                <div>
                  <button type="button" id="add_to_list">Add to List</button>
                </div>
              </div>
            </div>
          </fieldset>
          <hr />
          <table id="list">
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
                <th></th>
                <th>Qty</th>
                <th>Unit</th>
                <th>Item</th>
                <th>Cost</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {/* Render stockList items */}
             
                <tr>
                  <td>
                    <button type="button"><i></i></button>
                  </td>
                  <td>
                    <span></span>
                    <input type="hidden" name="item_id[]" />
                    <input type="hidden" name="unit[]"  />
                    <input type="hidden" name="qty[]"  />
                    <input type="hidden" name="price[]" />
                    <input type="hidden" name="total[]"  />
                  </td>
                  <td>
                    
                  </td>
                  <td>
                   <br />
                   
                  </td>
                  <td>
                  
                  </td>
                  <td>
                    
                  </td>
                </tr>
             
            </tbody>
            <tfoot>
              <tr>
                <th colSpan="5">Total
                  <input type="hidden" name="amount" value={0} />
                </th>
                <th>0</th>
              </tr>
            </tfoot>
          </table>
          <div>
            <div>
              <label htmlFor="remarks">Remarks</label>
              <textarea name="remarks" id="remarks" rows="3"></textarea>
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

export default ReturnForm;
