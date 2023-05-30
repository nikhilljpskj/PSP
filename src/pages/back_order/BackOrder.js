import { useState, useEffect } from 'react';
import "../../pages/GlobalStyles.css";

import Navbar from '../../components/Navbar';
import Navheader from '../../components/Navheader';
import Footer from '../../components/Footer';
import { Link, useNavigate} from 'react-router-dom';


const BackOrderList = () => {
  const [backOrders, setBackOrders] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://your-api-url.com/back-orders');
      const data = await response.json();
      setBackOrders(data);
    };
    fetchData();
  }, []);

  return (
    <div className='container'>
        <Navbar />
      <Navheader />
      <Footer />
    <div className='main'>
      <div>
        <h3>List of Back Orders</h3>
      </div>
      <div>
        <div>
          <table className='table'>
            <colgroup>
              <col width="5%" />
              <col width="15%" />
              <col width="20%" />
              <col width="20%" />
              <col width="10%" />
              <col width="10%" />
              <col width="10%" />
            </colgroup>
            <thead>
              <tr>
                <th className='thead'>#</th>
                <th className='thead'>Date Created</th>
                <th className='thead'>BO Code</th>
                <th className='thead'>Supplier</th>
                <th className='thead'>Items</th>
                <th className='thead'>Status</th>
                <th className='thead'>Action</th>
              </tr>
            </thead>
            <tbody>
              {backOrders.map((bo, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{bo.date_created}</td>
                  <td>{bo.bo_code}</td>
                  <td>{bo.supplier}</td>
                  <td>{bo.items}</td>
                  <td>
                    {bo.status === 0 && (
                      <span>Pending</span>
                    )}
                    {bo.status === 1 && (
                      <span>Partially received</span>
                    )}
                    {bo.status === 2 && (
                      <span>Received</span>
                    )}
                    {bo.status !== 0 && bo.status !== 1 && bo.status !== 2 && (
                      <span>N/A</span>
                    )}
                  </td>
                  <td align="center">
                    <button type="button">
                      Action
                      <span>Toggle Dropdown</span>
                    </button>
                    <div>
                      {bo.status === 1 && (
                        <a href={`http://your-app-url.com/receiving/manage_receiving?bo_id=${bo.id}`} data-id={bo.id}>
                          <span>Receive</span>
                        </a>
                      )}
                      <div></div>
                      <a href={`http://your-app-url.com/back_order/view_bo&id=${bo.id}`} data-id={bo.id}>
                        <span>View</span>
                      </a>
                    </div>
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
};

export default BackOrderList;
