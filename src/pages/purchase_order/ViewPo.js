import React, {useState } from 'react';
import "../../pages/GlobalStyles.css";


import Navbar from '../../components/Navbar';
import Navheader from '../../components/Navheader';
import Footer from '../../components/Footer';
import { Link} from 'react-router-dom';

function PurchaseOrderDetails({ id }) {
  const [orderDetails, ] = useState({});
  const [items, ] = useState([]);
  const [total, ] = useState(0);
  const [discount, ] = useState(0);
  const [tax, ] = useState(0);
  const [amount, ] = useState(0);



  

  

  return (
    
    <div className="container">
      <Navbar />
      <Navheader />
      <Footer />

      <div className="main">
        <div className="row">
        <h3>Purchase Order Details - {orderDetails.po_code}</h3>
      </div>
      <div>
        <div className="single-line-content">
          <div>
            <label>Order Code</label>
            <div>{orderDetails.ord_code || ''}</div>
          </div>
          <div>
            <label>P.O. Code</label>
            <div>{orderDetails.po_code || ''}</div>
          </div>
          <div>
            <div>
              <label>Supplier</label>
              <div>{orderDetails.supplier || ''}</div>
            </div>
          </div>
        </div>
        <h3>Orders</h3>
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
            {items.map((row, index) => (
              <tr key={index}>
                <td>{row.quantity.toFixed(2)}</td>
                <td>{row.unit}</td>
                <td>
                  {row.name} <br />
                  {row.description}
                </td>
                <td>{row.price.toFixed(2)}</td>
                <td>{row.total.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th colSpan="4">Sub Total</th>
              <th>{total.toFixed(2)}</th>
            </tr>
            <tr>
              <th colSpan="4">Discount {discount}%</th>
              <th>{discount.toFixed(2)}</th>
            </tr>
            <tr>
              <th colSpan="4">Tax {tax}%</th>
              <th>{tax.toFixed(2)}</th>
            </tr>
            <tr>
              <th colSpan="4">Total</th>
              <th>{amount.toFixed(2)}</th>
            </tr>
          </tfoot>
        </table>
        <div>
          <div>
            <label>Remarks</label>
            <p>{orderDetails.remarks || ''}</p>
          </div>
        </div>
        <div>
          {orderDetails.status > 0 && (
            <div>
              <span>{orderDetails.status === 2 ? 'RECEIVED' : 'PARTIALLY RECEIVED'}</span>
            </div>
          )}
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
}

export default PurchaseOrderDetails;
