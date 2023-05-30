import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Navbar from '../../components/Navbar';
import Navheader from '../../components/Navheader';
import Footer from '../../components/Footer';

function PurchaseOrderList() {
  const [purchaseOrders, setPurchaseOrders] = useState([]);

  useEffect(() => {
    // Fetch purchase orders data from the server
    fetchPurchaseOrders();
  }, []);

  const navigate = useNavigate();

  const fetchPurchaseOrders = async () => {
    try {
      const response = await fetch('/api/purchase_orders');
      const data = await response.json();
      setPurchaseOrders(data);
    } catch (error) {
      console.error('Error fetching purchase orders:', error);
    }
  };

  return (
    <div className="container">
      <Navbar />
      <Navheader />
      <Footer />
      <div className='main'>
        <div>
          <div>
            <h3>List of Purchase Orders</h3>
            <div>
            <div className='right'>
              <Link to="/purchase_order/manage_po" className="button-type" onClick={() => navigate('/purchase_order/manage_po')}>Create New</Link>
            </div>
            </div>
          </div>
          <div>
            <div>
              <table className="table">
                <colgroup>
                  <col width="5%" />
                  <col width="15%" />
                  <col width="10%" />
                  <col width="10%" />
                  <col width="20%" />
                  <col width="10%" />
                  <col width="10%" />
                  <col width="10%" />
                </colgroup>
                <thead>
                  <tr>
                    <th className='thead'>#</th>
                    <th className='thead'>Date Created</th>
                    <th className='thead'>Order Code</th>
                    <th className='thead'>PO Code</th>
                    <th className='thead'>Supplier</th>
                    <th className='thead'>Items</th>
                    <th className='thead'>Status</th>
                    <th className='thead'>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {purchaseOrders.map((order, index) => (
                    <tr key={order.id}>
                      <td className="text-center">{index + 1}</td>
                      <td>{order.dateCreated}</td>
                      <td>{order.orderCode}</td>
                      <td>{order.poCode}</td>
                      <td>{order.supplier}</td>
                      <td className="text-right">{order.items}</td>
                      <td className="text-center">
                        {order.status === 0 && <span>Pending</span>}
                        {order.status === 1 && <span>Partially received</span>}
                        {order.status === 2 && <span>Received</span>}
                        {(order.status !== 0 && order.status !== 1 && order.status !== 2) && (
                          <span>N/A</span>
                        )}
                      </td>
                      <td align="center">
                        <div className="dropdown">
                          <button type="button">
                            Action
                            <span>Toggle Dropdown</span>
                          </button>
                          <div className="dropdown-menu">
                            {order.status === 0 && (
                              <a href={`/admin?page=receiving/manage_receiving&po_id=${order.id}`} data-id={order.id}>
                                <span>Receive</span>
                              </a>
                            )}
                            <div className="dropdown-divider"></div>
                            <a href={`/admin?page=purchase_order/view_po&id=${order.id}`} data-id={order.id}>
                              <span>View</span>
                            </a>
                            <div className="dropdown-divider"></div>
                            <a href={`/purchase_order/manage_po&id=${order.id}`} data-id={order.id}>
                              <span>Edit</span>
                            </a>
                            <div className="dropdown-divider"></div>
                            <a href="purchase_order" data-id={order.id}>
                              <span>Delete</span>
                            </a>
                          </div>
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
    </div>
  );
}

export default PurchaseOrderList;
