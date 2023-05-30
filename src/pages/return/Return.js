import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import "../../pages/GlobalStyles.css";

import Navbar from '../../components/Navbar';
import Navheader from '../../components/Navheader';
import Footer from '../../components/Footer';

const ReturnList = () => {
  const [returnList, setReturnList] = useState([]);

  useEffect(() => {
    // Fetch return list from the server
    fetchReturnList();
  }, []);

  const fetchReturnList = () => {
    // Replace the following code with your logic to fetch return list from the server
    const returnListData = [
      {
        id: 1,
        dateCreated: '2021-05-28 12:00',
        returnCode: 'RTN001',
        supplier: 'Supplier 1',
        items: 5,
      },
      {
        id: 2,
        dateCreated: '2021-05-27 14:30',
        returnCode: 'RTN002',
        supplier: 'Supplier 2',
        items: 3,
      },
      // Add more return list items as needed
    ];
    setReturnList(returnListData);
  };
  const navigate = useNavigate();

  return (
    <div className='container'>
      <Navbar />
      <Navheader />
      <Footer />
    <div className='main'>
      <div>
        <h3>List of Return</h3>
        <div className='right'>
              <Link to="/return/manage_ret" className="button-type" onClick={() => navigate('/return/manage_ret')}>Create New</Link>
            </div>
      </div>
      <div>
        <div>
          <table className='table'>
            <colgroup>
              <col width="5%" />
              <col width="15%" />
              <col width="25%" />
              <col width="25%" />
              <col width="10%" />
              <col width="10%" />
            </colgroup>
            <thead>
              <tr>
                <th className='thead'>#</th>
                <th className='thead'>Date Created</th>
                <th className='thead'>Return Code</th>
                <th className='thead'>Supplier</th>
                <th className='thead'>Items</th>
                <th className='thead'>Action</th>
              </tr>
            </thead>
            <tbody>
              {returnList.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.dateCreated}</td>
                  <td>{item.returnCode}</td>
                  <td>{item.supplier}</td>
                  <td>{item.items}</td>
                  <td>
                    <button type="button">
                      Action
                    </button>
                    <div>
                      <a href=" " data-id={item.id}>
                        <span>View</span>
                      </a>
                      <div></div>
                      <a href=" " data-id={item.id}>
                        <span>Edit</span>
                      </a>
                      <div></div>
                      <a href=" " data-id={item.id}>
                        <span>Delete</span>
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

export default ReturnList;
