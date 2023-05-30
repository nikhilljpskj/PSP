import { useState, useEffect } from 'react';


import Navbar from '../../components/Navbar';
import Navheader from '../../components/Navheader';
import Footer from '../../components/Footer';
import { Link, useNavigate} from 'react-router-dom';

function DeliveryScheduleForm({ id, co_code }) {
  const [itemList, setItemList] = useState([]);
  const [selectedItem, setSelectedItem] = useState('');
  const [assignQty, setAssignQty] = useState('');
  const [assignDate, setAssignDate] = useState('');
  const [deliveryList, setDeliveryList] = useState([]);

  const addItemToList = () => {
    const selectedItemData = itemList.find(item => item.iid === selectedItem);

    if (selectedItemData) {
      const newItem = {
        iid: selectedItemData.iid,
        name: selectedItemData.name,
        order_qty: selectedItemData.order_qty,
        assign_qty: assignQty,
        assign_date: assignDate
      };

      setDeliveryList([...deliveryList, newItem]);
    }

    setSelectedItem('');
    setAssignQty('');
    setAssignDate('');
  };

  const navigate = useNavigate();

  const removeItemFromList = index => {
    const updatedList = [...deliveryList];
    updatedList.splice(index, 1);
    setDeliveryList(updatedList);
  };

  return (
    <div className='container'>
    <Navbar />
      <Navheader />
      <Footer />

    <div className='main'>
      <div>
        <h3>
          {id ? `Schedule Delivery for Customer Order - ${co_code}` : 'Create New Delivery Schedule'}
        </h3>
      </div>
      <div>
        <form action="" id="del-form">
          <input type="hidden" name="id" value={id || ''} />
          <div className='single-line-content'>
            <div>
              <label>Order Code</label>
              <input
                type="text"
                value={co_code || ''}
                readOnly
              />
            </div>
          </div>
          <hr />
          <fieldset>
          <h3>Item Form</h3>
            <div className="single-row-content">
            
              <div>
                <label htmlFor="item_id">Item</label>
                <select className='inp-box'
                  id="item_id"
                  value={selectedItem}
                  onChange={e => setSelectedItem(e.target.value)}
                >
                  <option disabled value=""></option>
                  {itemList.map(item => (
                    <option key={item.iid} value={item.iid}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="item_qty2">Order Qty</label>
                <input
                  type="text"
                  id="item_qty2"
                  value={
                    selectedItem ? itemList.find(item => item.iid === selectedItem)?.order_qty || '' : ''
                  }
                  readOnly
                />
              </div>
              <div>
                <label htmlFor="unit">Assign Qty</label>
                <input
                  type="text"
                  id="assign_qty"
                  value={assignQty}
                  onChange={e => setAssignQty(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="qty">Assign Date</label>
                <input
                  type="date"
                  step="any"
                  id="assign_date"
                  value={assignDate}
                  onChange={e => setAssignDate(e.target.value)}
                />
              </div>
              </div>
              <div>
              <div className="buttons-row">
              <Link className="button-type">Add To List</Link>
            </div>
            </div>
            
          </fieldset>
          <hr />
          <table id="list" className='table'>
            <colgroup>
              <col width="5%" />
              <col width="25%" />
              <col width="25%" />
              <col width="25%" />
              <col width="20%" />
            </colgroup>
            <thead>
              <tr>
                <th className='thead'></th>
                <th className='thead'>Item</th>
                <th className='thead'>Order Qty</th>
                <th className='thead'>Assign Qty</th>
                <th className='thead'>Assign Date</th>
              </tr>
            </thead>
            <tbody>
              {deliveryList.map((item, index) => (
                <tr key={index}>
                  <td>
                    <button
                      type="button"
                      onClick={() => removeItemFromList(index)}
                    >
                      <i></i>
                    </button>
                  </td>
                  <td>{item.name}</td>
                  <td>{item.order_qty}</td>
                  <td>{item.assign_qty}</td>
                  <td>{item.assign_date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </form>
      </div>
      <div className="buttons-row">
            <Link to="#" className="button-type">Cancel</Link>
            <Link to="/delivery" className="button-type" onClick={() => navigate('/delivery')}>
              Save
            </Link>
          </div>
    </div>
    </div>
  );
}

export default DeliveryScheduleForm;
