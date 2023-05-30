import "../../pages/GlobalStyles.css";


import Navbar from '../../components/Navbar';
import Navheader from '../../components/Navheader';
import Footer from '../../components/Footer';
//import { Link} from 'react-router-dom';

function ItemList({ items }) {
    function openPopup(url) {
        window.open(url, "_blank", "width=500,height=500");
      }
  return (
    <div className='container'>
        <Navbar />
      <Navheader />
      <Footer />
        <div className='main'>
      <div>
        <h3>List of Item</h3>
        <div className='right'>
        <a href=" " className='button-type' onClick={() => openPopup("item/manage_item")}>Create New</a>
            </div>
      </div>
      <div>
        <div>
          <div>
            <table className="table">
              <colgroup>
                <col width="5%" />
                <col width="15%" />
                <col width="25%" />
                <col width="20%" />
                <col width="15%" />
                <col width="20%" />
              </colgroup>
              <thead>
                <tr>
                  <th className="thead">#</th>
                  <th className="thead">Date Created</th>
                  <th className="thead">Name</th>
                  <th className="thead">Supplier</th>
                  <th className="thead">Status</th>
                  <th className="thead">Action</th>
                </tr>
              </thead>
              <tbody>
                
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                     
                        <span>Active</span>
                      
                        <span>Inactive</span>
                      
                    </td>
                    <td>
                      <button type="button" data-toggle="dropdown">
                        Action
                        
                      </button>
                      <div>
                        <a href=" "  onClick={() => openPopup("item/view_item")}>
                          View
                        </a>
                      </div>
                      <div>
                        <a href=" "  onClick={() => openPopup("item/manage_item")}>
                          Edit
                        </a>
                      </div>
                      <div>
                        <a href=" " >
                          <span>Delete</span>
                        </a>
                      </div>
                    </td>
                  </tr>
               
              </tbody>
            </table>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default ItemList;
