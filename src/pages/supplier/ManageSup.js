import React from 'react';
import { Link } from 'react-router-dom';

const SupplierForm = ({ id, name, address, cperson, contact, status }) => {
  //const navigate = useNavigate();

  const handleClose = () => {
    window.close();
  };

  return (
    <div className='popup'>
      <form action="" id="supplier-form">
        <table>
          <div>
            <h3 className='center'>Add New Supplier</h3>
            <input type="hidden" name="id" value={id || ''} />
            <tr>
              <td><label htmlFor="name">Name</label></td>
              <td><input className='inp-box' name="name" id="name" value={name || ''} /></td>
            </tr>
            <tr>
              <td><label htmlFor="address">Address</label></td>
              <td><textarea className='txtarea' name="address" id="address" cols="30" rows="2" value={address || ''}></textarea></td>
            </tr>
            <tr>
              <td><label htmlFor="cperson">Contact Person</label></td>
              <td><input className='inp-box' name="cperson" id="cperson" value={cperson || ''} /></td>
            </tr>
            <tr>
              <td><label htmlFor="contact">Contact #</label></td>
              <td><input className='inp-box' name="contact" id="contact" value={contact || ''} /></td>
            </tr>
            <tr>
              <td><label htmlFor="status">Status</label></td>
              <td>
                <select name="status" id="status" className='inp-box'>
                  <option value="1" selected={status === 1}>Active</option>
                  <option value="0" selected={status === 0}>Inactive</option>
                </select>
              </td>
            </tr>
          </div>
          <div className="buttons-row center">
            <Link className="button-type" onClick={handleClose}>
              Cancel
            </Link>
            <Link className="button-type" onClick={handleClose}>
              Save
            </Link>
          </div>
        </table>
      </form>
    </div>
  );
};

export default SupplierForm;
