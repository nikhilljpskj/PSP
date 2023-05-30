import { useState, useEffect } from 'react';


import Navbar from '../../components/Navbar';
import Navheader from '../../components/Navheader';
import Footer from '../../components/Footer';
import { Link, useNavigate} from 'react-router-dom';

function BackOrderView(props) {
  const [boDetails, setBoDetails] = useState(null);
  const { boCode } = props;

  
  const navigate = useNavigate();

  return (
    <div className='container'>
      <Navbar />
      <Navheader />
      <Footer />
    <div className='main'>
      <div>
        <h3>Back Order Details - {boDetails && boDetails.bo_code}</h3>
      </div>
      <div id="print_out">
        <div>
          <div>
            <label>From P.O. Code</label>
            <div>{boDetails && boDetails.po_code}</div>
          </div>
          <div>
            <div>
              <label htmlFor="supplier_id">Supplier</label>
              <div>{boDetails && boDetails.supplier}</div>
            </div>
          </div>
          <div>
            <label>B.O. Code</label>
            <div>{boDetails && boDetails.bo_code}</div>
          </div>
        </div>
        <h4>Orders</h4>
        <table id="list">
          <colgroup>
            <col width="10%" />
            <col width="10%" />
            <col width="30%" />
            <col width="25%" />
            <col width="25%" />
          </colgroup>
          <thead>
            <tr>
              <th>Qty</th>
              <th>Unit</th>
              <th>Item</th>
              <th>Cost</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {boDetails &&
              boDetails.bo_items.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>{item.quantity.toFixed(2)}</td>
                    <td>{item.unit}</td>
                    <td>
                      {item.name} <br />
                      {item.description}
                    </td>
                    <td>{item.price.toFixed(2)}</td>
                    <td>{item.total.toFixed(2)}</td>
                  </tr>
                );
              })}
          </tbody>
          <tfoot>
            <tr>
              <th colSpan="4">Sub Total</th>
              <th>{boDetails && boDetails.sub_total.toFixed(2)}</th>
            </tr>
            <tr>
              <th colSpan="4">Discount {boDetails && boDetails.discount_perc}%</th>
              <th>{boDetails && boDetails.discount && boDetails.discount.toFixed(2)}</th>
            </tr>
            <tr>
              <th colSpan="4">Tax {boDetails && boDetails.tax_perc}%</th>
              <th>{boDetails && boDetails.tax && boDetails.tax.toFixed(2)}</th>
            </tr>
            <tr>
              <th colSpan="4">Total</th>
              <th>{boDetails && boDetails.amount && boDetails.amount.toFixed(2)}</th>
            </tr>
          </tfoot>
        </table>
        <div>
          <div>
            <label>Remarks</label>
            <p>{boDetails && boDetails.remarks ? boDetails.remarks : 'N/A'}</p>
          </div>
        </div>
        {boDetails && boDetails.status > 0 && (
          <div>
            <span>{boDetails.status === 2 ? 'RECEIVED' : 'PARTIALLY RECEIVED'}</span>
          </div>
        )}
      </div>
      <div>
        <button type="button" id="print">
          Print
        </button>
        <a href>Back To List</a>
      </div>
      <table id="clone_list" className="d-none">
        <tr>
          <td>
            <button type="button" className="rem_row">
              <i></i>
            </button>
          </td>
          <td className="qty">
            <span></span>
            <input type="hidden" name="item_id[]" />
            <input type="hidden" name="unit[]" />
            <input type="hidden" name="qty[]" />
            <input type="hidden" name="price[]" />
            <input type="hidden" name="total[]" />
          </td>
          <td className="unit"></td>
          <td className="item"></td>
          <td className="cost"></td>
          <td className="total"></td>
        </tr>
      </table>
    </div>
    </div>
  );
}

export default BackOrderView;
