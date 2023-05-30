import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../../pages/GlobalStyles.css";
import Navbar from '../../components/Navbar';
import Navheader from '../../components/Navheader';
import Footer from '../../components/Footer';

const MyComponent = () => {
const [id] = useState('');
const [coCode] = useState('');
const [customer_id, setCustomer_id] = useState('');
const [po_code, setPo_code] = useState('');
const [po_date, setPo_date] = useState('');
const [delivery_date, setDelivery_date] = useState('');
const navigate = useNavigate();

return (
<div className="container">
<Navbar />
<Navheader />

<div className="main">
      <div className="row">
        <h3>Create New Customer Order</h3>
      </div>
      <div className="row">
        <form action="" id="co-form">
          <div className="single-line-content">
          <div>
            <label>Order Code</label>
            <input type="text" value={coCode} readOnly />
            </div>
            <div>
              <label htmlFor="customer_id">Customer</label>
              <select className='inp-box'
                name="customer_id"
                id="customer_id"
                value={customer_id}
                onChange={(e) => setCustomer_id(e.target.value)}
              >
                <option disabled></option>
                {/* Map over customer list data and render options */}
              </select>
            </div>
            <div>
              <label>P.O. Code</label>
              <input
                type="text"
                name="po_code"
                value={po_code}
                onChange={(e) => setPo_code(e.target.value)}
              />
            </div>
            <div>
              <label>P.O. Date</label>
              <input
                type="date" className='inp-box'
                name="po_date"
                value={po_date}
                onChange={(e) => setPo_date(e.target.value)}
              />
            </div>
            <div>
              <label>Delivery Date</label>
              <input
                type="date" className='inp-box'
                name="delivery_date"
                value={delivery_date}
                onChange={(e) => setDelivery_date(e.target.value)}
              />
            </div>
          </div>
          <fieldset>
            <div className="single-row-content">
              <div>
                <label htmlFor="item_id">Item</label>
                <select id="item_id" className='inp-box'>
                  <option disabled selected></option>
                  {/* Map over item_arr data and render options */}
                </select>
              </div>
              <div>
                <label htmlFor="item_cost2">Cost</label>
                <input type="text" id="item_cost2" />
              </div>
              <div>
                <label htmlFor="unit">Unit</label>
                <input type="text" id="unit" />
              </div>
              <div>
                <label htmlFor="qty">Qty</label>
                <input type="number" step="any" id="qty" />
              </div>
            </div>
            <div>
              <div className='center'>
                <input type="file" name="multiple_files[]" id="_multiple_files" />
              </div>
            </div>
            <div>
            <div className="buttons-row">
              <Link to="#" className="button-type">Select</Link>
              <Link to="#" className="button-type">Upload</Link>
            </div>
            </div>
            <div className="buttons-row">
              <Link className="button-type">Add To List</Link>
            </div>
          </fieldset>
          <table id="list" className="table">
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
              {/* Insert your logic to fetch and map data here */}
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
                    type="number"
                    min="0"
                    max="100"
                    value={0}
                  />
                  %
                  <input type="hidden" name="discount_amount" value={0} />
                </th>
                <th className="discount">0</th>
              </tr>
              <tr>
                <th colSpan="5">
                  Tax{' '}
                  <input
                    style={{ width: '40px !important' }}
                    name="tax_perc"
                    type="number"
                    min="0"
                    max="100"
                    value={0}
                  />
                  %
                  <input type="hidden" name="tax_amount" value={0} />
                </th>
                <th className="tax">0</th>
              </tr>
              <tr>
                <th colSpan="5">Grand Total</th>
                <th className="grand-total">0</th>
              </tr>
            </tfoot>
          </table>
          <div className="buttons-row">
            <Link to="#" className="button-type">Cancel</Link>
            <Link to="/customer_order/view_co" className="button-type" onClick={() => navigate('/customer_order/view_co')}>
              Save
            </Link>
          </div>
        </form>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default MyComponent;