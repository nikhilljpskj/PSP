import React from 'react';
import "../../pages/GlobalStyles.css";
import Navbar from '../../components/Navbar';
import Navheader from '../../components/Navheader';
import Footer from '../../components/Footer';

function SupplierList() {
  function openPopup(url) {
    window.open(url, "_blank", "width=500,height=500");
  }

  const suppliers = [
    // sample supplier data
    {
      id: 1,
      dateCreated: '2023-05-29 10:00',
      name: 'Supplier A',
      contactPerson: 'John Doe',
      status: 1
    },
    {
      id: 2,
      dateCreated: '2023-05-28 15:30',
      name: 'Supplier B',
      contactPerson: 'Jane Smith',
      status: 0
    },
    // Add more suppliers as needed
  ];

  return (
    <div className='container'>
      <Navbar />
      <Navheader />
      <Footer />
      <div className='main'>
        <div>
          <h3>List of Suppliers</h3>
          <div>
            <table className='table'>
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
                  <th className='thead'>#</th>
                  <th className='thead'>Date Created</th>
                  <th className='thead'>Supplier</th>
                  <th className='thead'>Contact Person</th>
                  <th className='thead'>Status</th>
                  <th className='thead'>Action</th>
                </tr>
              </thead>
              <tbody>
                {suppliers.map((supplier, index) => (
                  <tr key={supplier.id}>
                    <td>{index + 1}</td>
                    <td>{supplier.dateCreated}</td>
                    <td>{supplier.name}</td>
                    <td>{supplier.contactPerson}</td>
                    <td>
                      {supplier.status === 1 ? (
                        <span>Active</span>
                      ) : (
                        <span>Inactive</span>
                      )}
                    </td>
                    <td>
                      <button type="button">Action</button>
                      <div>
                        <a href=" " data-id={supplier.id} onClick={() => openPopup("supplier/view_sup")}>
                          View
                        </a>
                      </div>
                      <div>
                        <a href=" " data-id={supplier.id} onClick={() => openPopup("supplier/manage_sup")}>
                          Edit
                        </a>
                      </div>
                      <div>
                        <a href=" " data-id={supplier.id}>
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
}

export default SupplierList;
