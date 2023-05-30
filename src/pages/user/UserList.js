import "../../pages/GlobalStyles.css";


import Navbar from '../../components/Navbar';
import Navheader from '../../components/Navheader';
import Footer from '../../components/Footer';
import { Link, useNavigate } from "react-router-dom";

function Users({ users }) {
  const navigate = useNavigate();
  return (
    <div className='container'>
        <Navbar />
      <Navheader />
      <Footer />
      <div className="main">
      <div>
        <h3>List of System Users</h3>
        <div className='right'>
              <Link to="/user/manage_user" className="button-type" onClick={() => navigate('/user/manage_user')}>Create New</Link>
          </div>
      </div>
      <div>
        <div>
          <table className='table'>
            <thead>
              <tr>
                <th className="thead">#</th>
                <th className="thead">Avatar</th>
                <th className="thead">Name</th>
                <th className="thead">Username</th>
                <th className="thead">User Type</th>
                <th className="thead">Action</th>
              </tr>
            </thead>
            <tbody>
             
                <tr>
                  <td></td>
                  <td>
                    <img src="../../assets/psp-logo.png" alt="user_avatar" />
                  </td>
                  <td></td>
                  <td>
                    <p></p>
                  </td>
                  <td>
                    <p></p>
                  </td>
                  <td align="center">
                    <button type="button">Action</button>
                    <div>
                      <a href="/user/manage_user">Edit</a>
                    </div>
                    <div>
                      <a href=" " >Delete</a>
                    </div>
                  </td>
                </tr>
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Users;
