import { useState, useEffect } from 'react';
import "../../pages/GlobalStyles.css";

import Navbar from '../../components/Navbar';
import Navheader from '../../components/Navheader';
import Footer from '../../components/Footer';
import { Link, useNavigate} from 'react-router-dom';


function ScheduledDeliveries() {
  const [deliveries, setDeliveries] = useState([]);

  
  const navigate = useNavigate();

  return (
    <div className='container'>
      <Navbar />
      <Navheader />
      <Footer />

<div className='main'>
      <div>
        <h3>List of Scheduled Deliveries</h3>
        
      </div>
      <div>
        <div>
          <table className='table'>
            <colgroup>
              <col width="5%" />
              <col width="15%" />
              <col width="20%" />
              <col width="20%" />
              <col width="15%" />
              <col width="15%" />
              <col width="15%" />
            </colgroup>
            <thead>
              <tr>
                <th className='thead'>#</th>
                <th className='thead'>Order Code</th>
                <th className='thead'>Item Name</th>
                <th className='thead'>Order Qty</th>
                <th className='thead'>Delivery Qty</th>
                <th className='thead'>Delivery Date</th>
                <th className='thead'>Action</th>
              </tr>
            </thead>
            <tbody>
              {deliveries.map((delivery) => (
                <tr key={delivery.did}>
                  <td>{delivery.did}</td>
                  <td>{delivery.cocode}</td>
                  <td>{delivery.itmname}</td>
                  <td>{delivery.order_qty}</td>
                  <td>{delivery.assign_qty}</td>
                  <td>{delivery.assign_date}</td>
                  <td align="center">
                    {delivery.packing > 0 ? (
                      <span></span>
                    ) : (
                      <a href={`/admin?page=packing/manage_pack&id=${delivery.did}`}>
                        <span></span> Packing
                      </a>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </div>
  );
}

export default ScheduledDeliveries;
