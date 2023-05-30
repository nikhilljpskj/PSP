import React from 'react';

import "../../pages/GlobalStyles.css";
import Navbar from '../../components/Navbar';
import Navheader from '../../components/Navheader';
import Footer from '../../components/Footer';



const CustomerList = () => {
    function openPopup(url) {
        window.open(url, "_blank", "width=500,height=500");
      }
  const customerData = [
    // Add your customer data here
  ];
  


  return (
    <div className='container'>
      <Navbar />
      <Navheader />
      <Footer />
      <div className='main'>
      <div>
        <h3>List of Customer</h3>
        <div className='right'>
        <a href=" " className='button-type' onClick={() => openPopup("customer/manage_cust")}>Create New</a>
            </div>
      </div>
      <div>
        <div>
          <table>
            <colgroup>
              <col width="5%" />
              <col width="15%" />
              <col width="25%" />
              <col width="25%" />
              <col width="15%" />
              <col width="15%" />
            </colgroup>
            <thead>
              <tr>
                <th>#</th>
                <th>Date Created</th>
                <th>Customer</th>
                <th>Contact Person</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {customerData.map((customer, index) => (
                <tr key={index}>
                  <td className="text-center">{index + 1}</td>
                  <td>{customer.dateCreated}</td>
                  <td>{customer.name}</td>
                  <td>{customer.cperson}</td>
                  <td className="text-center">
                    {customer.status === 1 ? (
                      <span>Active</span>
                    ) : (
                      <span>Inactive</span>
                    )}
                  </td>
                  <td align="center">
                  <button type="button">Action</button>
                      <div>
                        <a href=" " data-id={customer.id} onClick={() => openPopup("customer/view_cust")}>
                          View
                        </a>
                      </div>
                      <div>
                        <a href=" " data-id={customer.id} onClick={() => openPopup("customer/manage_cust")}>
                          Edit
                        </a>
                      </div>
                      <div>
                        <a href=" ">
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
    </div>
  );
};

export default CustomerList;
