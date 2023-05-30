import React from "react";
import "../../pages/GlobalStyles.css";
import { Link } from "react-router-dom";
import Navbar from '../../components/Navbar';
import Navheader from '../../components/Navheader';
import Footer from '../../components/Footer';










const ViewCust = () => {
  return (
    <div className="container">
      <Navbar />
      <Navheader />
      <Footer />

      <div className="main">
        <div className="content">
          <h3>Customer Order Details</h3>
          
          <div className="single-row-content">
            <div>
              <label>Order Code</label>
              <div className="input-field"></div>
            </div>
            <div>
              <label htmlFor="customer_id">Customer</label>
              <div className="input-field"></div>
            </div>
            <div>
              <label>P.O Code</label>
              <div className="input-field"></div>
            </div>
            <div>
              <label>P.O Date</label>
              <div className="input-field"></div>
            </div>
            <div>
              <label>Delivery Date</label>
              <div className="input-field"></div>
            </div>
          </div>
          <h3>Orders</h3>
          <table className="table">
            <colgroup>
              <col width="10%" />
              <col width="15%" />
              <col width="25%" />
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
              {/* Order items will be dynamically populated here */}
            </tbody>
            <tfoot>
              <tr>
                <th colSpan="4">Sub Total</th>
                <th></th>
              </tr>
              <tr>
                <th colSpan="4">Discount</th>
                <th></th>
              </tr>
              <tr>
                <th colSpan="4">Tax</th>
                <th></th>
              </tr>
              <tr>
                <th colSpan="4">Total</th>
                <th></th>
              </tr>
            </tfoot>
          </table>
          <div>
            <label htmlFor="remarks">Remarks</label>
            <textarea></textarea>
          </div>

          <div className="buttons-row">
            <Link id="print" className="button-type">Print</Link>
            <Link href="#" className="button-type">Edit</Link>
            <Link href="#" className="button-type">Back To List</Link>
          </div>
          <table>
            <tbody>
              <tr>
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
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ViewCust;
