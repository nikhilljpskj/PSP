import React from 'react';
import { Link } from 'react-router-dom';


const ViewItem = ({ name, description, cost, supplier, status }) => {
    const handleClose = () => {
        window.close();
      };
  return (
    <div className='popup'>
      <div>
      <div>
        <div>
          <div>
            <fieldset>
              <div>
                <dl>
                  <dt>Item Name:</dt>
                  <dd>{name}</dd>
                  <dt>Description:</dt>
                  <dd>{description}</dd>
                  <dt>Cost:</dt>
                  <dd>{cost ? cost.toFixed(2) : ''}</dd>
                  <dt>Supplier:</dt>
                  <dd>{supplier}</dd>
                  <dt>Status:</dt>
                  <dd>
                    {status === 1 ? (
                      <span>Active</span>
                    ) : (
                      <span>Inactive</span>
                    )}
                  </dd>
                </dl>
              </div>
              <div className='buttons-row'>
            <Link className="button-type" onClick={handleClose}>
              Close
            </Link>
          </div>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
    
    </div>
  );
};

export default ViewItem;
