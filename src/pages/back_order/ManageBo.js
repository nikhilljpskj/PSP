import { useState, useEffect } from 'react';


import Navbar from '../../components/Navbar';
import Navheader from '../../components/Navheader';
import Footer from '../../components/Footer';
import { Link, useNavigate} from 'react-router-dom';

const PurchaseOrderDetails = () => {
  const [poCode, setPoCode] = useState('');
  const [supplierId, setSupplierId] = useState('');
  const [items, setItems] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [discountPerc, setDiscountPerc] = useState(0);
  const [taxPerc, setTaxPerc] = useState(0);
  const [remarks, setRemarks] = useState('');

  

  const handleRemoveItem = (index) => {
    // Remove item from the list
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  const handleItemChange = (index, field, value) => {
    // Update item details in the list
    const updatedItems = [...items];
    updatedItems[index][field] = value;
    setItems(updatedItems);
  };

  return (
    <div className='container'>
        <Navbar />
      <Navheader />
      <Footer />
    <div className='main'>
      <div>
        <h4>Purchase Order Details - ${poCode}` : 'Create New Purchase Order'</h4>
      </div>
      <div>
        <form action="" id="po-form">
          {/* Rest of the code */}
          <tbody>
            {items.map((item, index) => (
              <tr key={index}>
                <td>
                  <button type="button" onClick={() => handleRemoveItem(index)}>
                    <i></i>
                  </button>
                </td>
                <td>
                  <span></span>
                  <input type="hidden" name="item_id[]" value={item.itemId} />
                  <input type="hidden" name="unit[]" value={item.unit} />
                  <input type="hidden" name="qty[]" value={item.qty} />
                  <input type="hidden" name="price[]" value={item.price} />
                  <input type="hidden" name="total[]" value={item.total} />
                </td>
                <td>
                  <input
                    type="text"
                    value={item.unit}
                    onChange={(e) => handleItemChange(index, 'unit', e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={item.itemId}
                    onChange={(e) => handleItemChange(index, 'itemId', e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={item.price}
                    onChange={(e) => handleItemChange(index, 'price', e.target.value)}
                  />
                </td>
                <td>{item.price * item.qty}</td>
              </tr>
            ))}
          </tbody>
          {/* Rest of the code */}
          <tfoot>
            <tr>
              <th colSpan="5">Sub Total</th>
              <th>{subtotal}</th>
            </tr>
            {/* Rest of the code */}
          </tfoot>
        </form>
        <div>
          <div>
            <label htmlFor="remarks">Remarks</label>
            <textarea
              name="remarks"
              id="remarks"
              rows="3"
              value={remarks}
              onChange={(e) => setRemarks(e.target.value)}
            ></textarea>
          </div>
        </div>
      </div>
      <div>
        <button type="submit" form="po-form">Save</button>
        <a href='/admin?page=purchase_order'>Cancel</a>
      </div>
    </div>
    </div>
  );
};

export default PurchaseOrderDetails;
