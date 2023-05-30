import React, { useState, useEffect } from "react";
import { Link, useNavigate} from 'react-router-dom';
import "../../pages/GlobalStyles.css";


import Navbar from '../../components/Navbar';
import Navheader from '../../components/Navheader';
import Footer from '../../components/Footer';

const PurchaseOrderForm = () => {
  const [id, ] = useState('');
  const [coCode, ] = useState('');
  const [supplierId, setSupplierId] = useState('');
  const [poCode, ] = useState('');
  const [items, setItems] = useState([]);
  const [subTotal, ] = useState(0);
  const [taxPerc, ] = useState(0);
  const [tax, ] = useState(0);
  const [total, ] = useState(0);
  const [remarks, setRemarks] = useState('');

  useEffect(() => {

  }, []);

  const handleSupplierChange = (e) => {
    setSupplierId(e.target.value);
  };

  const navigate = useNavigate();

  const handlePriceChange = (e, index) => {
    const newItems = [...items];
    newItems[index].price = parseFloat(e.target.value);
    setItems(newItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container">
      <Navbar />
      <Navheader />
      <Footer />

      <div className="main">
        <div className="row">
          <h3> {id ? "Update Purchase Order Details" : "New Purchase Order"} </h3>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <input type="hidden" name="id" value={id} />
            <input type="hidden" name="ord_code" value={coCode} />
            <div className="single-line-content">
              <div>
                <label htmlFor="supplier_id">Supplier</label>
                <select name="supplier_id" id="supplier_id" className='inp-box' value={supplierId} onChange={handleSupplierChange}>
                  <option value="" disabled></option>
                  {/* Render supplier options */}
                </select>
              </div>
              <div>
                <label htmlFor="po_code"> PO # <span></span>
                </label>
                <input type="text" id="po_code" name="po_code" value={poCode} readOnly/>
                <small>
                  <i>Leave this blank to Automatically Generate upon saving.</i>
                </small>
              </div>
            </div>
            <div>
              <table className="table" id="item-list">
                <colgroup>
                  <col width="50%" />
                  <col width="10%" />
                  <col width="10%" />
                  <col width="15%" />
                  <col width="15%" />
                </colgroup>
                <thead>
                  <tr>
                    <th className='thead'>Item</th>
                    <th className='thead'>Unit</th>
                    <th className='thead'>Qty</th>
                    <th className='thead'>Price</th>
                    <th className='thead'>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Render item rows */}
                </tbody>
                <tfoot>
                  <tr>
                    <th colSpan="4">
                      <span>Sub Total</span>
                    </th>
                    <th> {subTotal} </th>
                  </tr>
                  <tr>
                    <th colSpan="4"> Tax (%)
                      <input type="number" step="any" name="tax_perc" value={taxPerc} onChange={(e) => (e.target.value)}/>
                    </th>
                    <th>
                      <input type="text" readOnly value={tax} name="tax" />
                    </th>
                  </tr>
                  <tr>
                    <th colSpan="4"> Total </th>
                    <td> {total} </td>
                  </tr>
                </tfoot>
              </table>
              <div>
                <div className="row">
                  <label htmlFor="remarks">Remarks</label>
                  <textarea name="remarks" id="remarks" cols="10" rows="4" value={remarks} onChange={(e) => setRemarks(e.target.value)}></textarea>
                </div>
              </div>
            </div>
            <div>
              <div className="buttons-row">
                <Link to="/purchase_order" className="button-type" onClick={() => navigate('/purchase_order')}>Cancel </Link>
                <Link to="/purchase_order/view_po" className="button-type" onClick={() => navigate('/purchase_order/view_o')}>Save</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PurchaseOrderForm;
