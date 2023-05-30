import React from 'react';
import { Link } from 'react-router-dom';


function MyForm() {
    const handleClose = () => {
        window.close();
      };
  return (
    <div className='popup'>
      <form action="" id="customer-form">
        <table >
        <input type="hidden" name="id" value="" />
        <tr>
         <td> <label htmlFor="name">Name</label></td>
         <td> <input className='inp-box' name="name" id="name" value="" /></td>
        </tr>
        <tr>
        <td> <label htmlFor="address">Address</label></td>
        <td> <textarea className='txtarea' name="address" id="address" cols="30" rows="2"></textarea></td>
        </tr>
        <tr>
        <td> <label htmlFor="cperson">Contact Person</label></td>
         <td> <input className='inp-box' name="cperson" id="cperson" value="" /></td>
        </tr>
        <tr>
        <td> <label htmlFor="contact">Contact #</label> </td>
        <td>  <input className='inp-box' name="contact" id="contact" value="" /> </td>
        </tr>
        <tr>
        <td> <label htmlFor="status">Status</label></td>
        <td> <select className='inp-box' name="status" id="status">
            <option value="1">Active</option>
            <option value="0">Inactive</option>
          </select></td>
        </tr>
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
}
export default MyForm;