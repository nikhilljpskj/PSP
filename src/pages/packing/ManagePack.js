import { useState, useEffect } from 'react';
import "../../pages/GlobalStyles.css";

import Navbar from '../../components/Navbar';
import Navheader from '../../components/Navheader';
import Footer from '../../components/Footer';
import { Link, useNavigate} from 'react-router-dom';


const ManagePacking = () => {
  const navigate = useNavigate();
  return (
    <div className='container'>
       <Navbar />
      <Navheader />
      <Footer />
    <div className='main'>
      <div>
        <h3>
          Create New Packing for Delivery Schedule
        </h3>
      </div>
      <div>
        <form action="" id="pack-form">
          <div>
            <div className='single-line-content'>
              <div>
                <label>Order No</label>
                <input
                  type="text"
                  readOnly
                />
              </div>
              <div>
                <label>Item Name</label>
                <input
                  type="text"
                  readOnly
                />
              </div>
              <div>
                <label>Delivery Qty</label>
                <input
                  type="text"
                  readOnly
                />
              </div>
              <div>
                <label>Delivery Date</label>
                <input
                  type="text"
                  readOnly
                />
              </div>
            </div>
            <hr />
            <fieldset >
              <h3>Packing Form</h3>
              <div className='single-row-content'>
                <div>
                  <div>
                    <label htmlFor="box_size">
                      Box Size
                    </label>
                    <input
                      type="text"
                      id="box_size"
                    />
                  </div>
                </div>
                <div>
                  <div>
                    <label htmlFor="box_no">
                      Box No
                    </label>
                    <input
                      type="text"
                      id="box_no"
                    />
                  </div>
                </div>
                <div>
                  <div>
                    <label htmlFor="box_qty">
                      Box Qty
                    </label>
                    <input
                      type="text"
                      id="box_qty"
                    />
                  </div>
                </div>
                <div>
                  <div>
                    <label htmlFor="box_weight">
                      Box Weight
                    </label>
                    <input
                      type="text"
                      id="box_weight"
                    />
                  </div>
                </div>
                </div>
                <div className="buttons-row">
                <Link className="button-type">Add To List</Link>
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
                  <th className='thead'>Box Size</th>
                  <th className='thead'>Box No</th>
                  <th className='thead'>Box Qty</th>
                  <th className='thead'>Box Weight</th>
                </tr>
              </thead>
              <tbody></tbody>
            </table>
          </div>
        </form>
      </div>
      <div className="buttons-row">
            <Link to="#" className="button-type">Cancel</Link>
            <Link to="/packing" className="button-type" onClick={() => navigate('/packing')}>
              Save
            </Link>
          </div>
    </div>
    </div>
  );
};

export default ManagePacking;
