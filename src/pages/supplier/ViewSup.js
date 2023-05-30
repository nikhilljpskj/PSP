import React from 'react';
import { Link } from 'react-router-dom';

function ViewSupplier({ name, address, cperson, contact, status }) {
  const handleClose = () => {
    window.close();
  };

  return (
    <div className='popup'>
      <div className='popup-content'>
        <fieldset>
          <div>
            <div>
              <span>Name:</span>
              <span>{name}</span>
            </div>
            <div>
              <span>Address:</span>
              <span>{address}</span>
            </div>
            <div>
              <span>Contact Person:</span>
              <span>{cperson}</span>
            </div>
            <div>
              <span>Contact #:</span>
              <span>{contact}</span>
            </div>
            <div>
              <span>Status:</span>
              <span>{status === 1 ? <span>Active</span> : <span>Inactive</span>}</span>
            </div>
          </div>
          <div className='buttons-row'>
            <Link className="button-type" onClick={handleClose}>
              Close
            </Link>
          </div>
        </fieldset>
      </div>
    </div>
  );
}

export default ViewSupplier;
