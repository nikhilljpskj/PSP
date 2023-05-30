import React from 'react';
import { Link } from 'react-router-dom';


function ItemManage({ id, name, description, cost, supplierId, status }) {
  const handleClose = () => {
    window.close();
  };
  return (
    <div className='popup'>
      <form id="item-form">
        <table>
          <h3 className='center'>Add New Item</h3>
        <input type="hidden" className='inp-box' name="id" value={id || ''} />
        <tr>
         <td> <label htmlFor="name">Name</label></td>
         <td><input type="text" className='inp-box' name="name" id="name" value={name || ''} /> </td>
        </tr>
        <tr>
        <td> <label htmlFor="description">Description</label></td> 
        <td>  <textarea name="description" className='txtarea' id="description" cols="30" rows="2" value={description || ''}></textarea></td> 
        </tr>
        <tr>
        <td> <label htmlFor="cost">Cost</label></td> 
        <td>  <input type="number" className='inp-box' name="cost" id="cost" step="any" value={cost || ''} /></td> 
        </tr>
        <tr>
        <td> <label htmlFor="supplier_id">Supplier</label></td> 
        <td>  <select className='inp-box' name="supplier_id" id="supplier_id">
            <option disabled selected></option>
            {/* Supplier options */}
          </select></td> 
        </tr>
        <tr>
        <td> <label htmlFor="status">Status</label></td> 
        <td>   <select className='inp-box' name="status" id="status">
            <option value="1" selected={status === 1}>Active</option>
            <option value="0" selected={status === 0}>Inactive</option>
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

export default ItemManage;
