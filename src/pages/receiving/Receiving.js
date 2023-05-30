import React from 'react';
import { Link } from 'react-router-dom';

import "../../pages/GlobalStyles.css";

import Navbar from '../../components/Navbar';
import Navheader from '../../components/Navheader';
import Footer from '../../components/Footer';

function ReceivedOrdersList() {
  const orders = [
  ];
  

  return (
    <div className="container">
      <Navbar />
      <Navheader />
      <Footer />
    <div className='main'>
      <h3>List of Received Orders</h3>
      <div>
        <table className='table'>
          <colgroup>
            <col width="5%" />
            <col width="25%" />
            <col width="25%" />
            <col width="25%" />
            <col width="20%" />
          </colgroup>
          <thead>
            <tr>
              <th className='thead'>#</th>
              <th className='thead'>Date Created</th>
              <th className='thead'>From</th>
              <th className='thead'>Items</th>
              <th className='thead'>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={order.id}>
                <td>{index + 1}</td>
                <td>{order.dateCreated}</td>
                <td>{order.from}</td>
                <td>{order.items}</td>
                <td>
                  <button type="button">Action</button>
                  <div>
                    <Link to ='/admin?page=receiving/view_receiving&id'>
                      View
                    </Link>
                    <div></div>
                    <a href='/admin?page=receiving/view_receiving&id'>
                      Edit
                    </a>
                    <div></div>
                    <a href='/admin?page=receiving/view_receiving&id'>
                      Delete
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
  );
}

export default ReceivedOrdersList;
