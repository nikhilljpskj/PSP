import React from 'react';
//import { Link } from 'react-router-dom';
//import { FaBars, FaTimes } from 'react-icons/fa';
import { BsFillGridFill, BsFileEarmarkText, BsTruck, BsBag, BsBox, BsPerson } from 'react-icons/bs';
import "../pages/GlobalStyles.css";

const Heroimg = () => {
  const [poRecords, ] = React.useState(0);
  const [customerOrderRecords, ] = React.useState(0);
  const [suppliers, ] = React.useState(0);
  const [customers, ] = React.useState(0);
  const [items, ] = React.useState(0);
  const [users, ] = React.useState(0);
 // const [type] = React.useState(process.env.REACT_APP_USER_TYPE);

  return (
    <div className='container'>
        <div className='main'>
            <h3>Welcome to PSP</h3>
    
      <div className="dashrow">
        <div className="dashcol">
          <div className="dashbox">
            <div className="dashhov">
              <div className="dashhead">
                <h5 className="dashtitle">
                  <BsFillGridFill className="dashic" /> PO Records
                </h5>
              </div>
              <div className="dashbdy">
                <p className="dashtxt">{poRecords}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="dashcol">
          <div className="dashbox">
            <div className="dashhov">
              <div className="dashhead">
                <h5 className="dashtitle">
                  <BsFileEarmarkText className="dashic" /> Customer Order Records
                </h5>
              </div>
              <div className="dashbdy">
                <p className="dashtxt">{customerOrderRecords}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="dashrow">
        <div className="dashcol">
          <div className="dashbox">
            <div className="dashhov">
              <div className="dashhead">
                <h5 className="dashtitle">
                  <BsTruck className="dashic" /> Suppliers
                </h5>
              </div>
              <div className="dashbdy">
                <p className="dashtxt">{suppliers}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="dashcol">
          <div className="dashbox">
            <div className="dashhov">
              <div className="dashhead">
                <h5 className="dashtitle">
                  <BsBag className="dashic" /> Customers
                </h5>
              </div>
              <div className="dashbdy">
                <p className="dashtxt">{customers}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="dashrow">
        <div className="dashcol">
          <div className="dashbox">
            <div className="dashhov">
              <div className="dashhead">
                <h5 className="dashtitle">
                  <BsBox className="dashic" /> Items
                </h5>
              </div>
              <div className="dashbdy">
                <p className="dashtxt">{items}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="dashcol">
          <div className="dashbox">
            <div className="dashhov">
              <div className="dashhead">
                <h5 className="dashtitle">
                  <BsPerson className="dashic" /> Users
                </h5>
              </div>
              <div className="dashbdy">
                <p className="dashtxt">{users}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    </div>
  );
};

export default Heroimg;
