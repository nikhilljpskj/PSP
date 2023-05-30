import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import "../../pages/GlobalStyles.css";

import Navbar from '../../components/Navbar';
import Navheader from '../../components/Navheader';
import Footer from '../../components/Footer';

const CustomerOrderList = () => {
  const customerOrders = [
    // Customer order data
    // Replace this array with your actual data
  ];

  const navigate = useNavigate();

  const deleteCustomerOrder = () => {
    // Function to delete a customer order
    // Implement your delete logic here
  };

  return (
    <div className="container">
      <Navbar />
      <Navheader />
      <Footer />
      <div className="main">
        <div>
          <div>
            <h3>List of Customer Orders</h3>
            <div className='right'>
              <Link to="/customer_order/manage_co" className="button-type" onClick={() => navigate('/customer_order/manage_co')}>Create New</Link>
            </div>
          </div>
          <div>
            <div>
              <table className="table">
                <colgroup>
                  <col width="5%" />
                  <col width="15%" />
                  <col width="15%" />
                  <col width="15%" />
                  <col width="10%" />
                  <col width="10%" />
                  <col width="15%" />
                  <col width="10%" />
                  <col width="10%" />
                </colgroup>
                <thead>
                  <tr>
                    <th className='thead'>#</th>
                    <th className='thead'>Date Created</th>
                    <th className='thead'>Order Code</th>
                    <th className='thead'>Customer</th>
                    <th className='thead'>P.O. Code</th>
                    <th className='thead'>P.O. Date</th>
                    <th className='thead'>Delivery Date</th>
                    <th className='thead'>Items</th>
                    <th className='thead'>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {customerOrders.map((order, index) => (
                    <tr key={order.id}>
                      <td>{index + 1}</td>
                      <td>{order.dateCreated}</td>
                      <td>{order.orderCode}</td>
                      <td>{order.customer}</td>
                      <td>{order.poCode}</td>
                      <td>{order.poDate}</td>
                      <td>{order.deliveryDate}</td>
                      <td>{order.items}</td>
                      <td>
                        <div className="dropdown">
                          <button>
                            Action
                            <span>Toggle Dropdown</span>
                          </button>
                          <div className="dropdown-menu">
                            <Link className="dropdown-item" to={`/admin?page=customer_order/view_co&id=${order.id}`} data-id={order.id}>
                              <span>View</span>
                            </Link>
                            <div className="dropdown-divider"></div>
                            <Link className="dropdown-item" to={`/admin?page=purchase_order/manage_po&id=${order.id}`} data-id={order.id}>
                              <span>Purchase</span>
                            </Link>
                            <div className="dropdown-divider"></div>
                            <Link className="dropdown-item" to={`/admin?page=delivery/manage_del&id=${order.id}`} data-id={order.id}>
                              <span>Delivery</span>
                            </Link>
                            <div className="dropdown-divider"></div>
                            <Link className="dropdown-item" to={`/admin?page=customer_order/manage_co&id=${order.id}`} data-id={order.id}>
                              <span>Edit</span>
                            </Link>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item delete_data" href="javascript:void(0)" data-id={order.id}>
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
};

export default CustomerOrderList;
