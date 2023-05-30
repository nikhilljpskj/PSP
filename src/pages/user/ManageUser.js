import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Navheader from '../../components/Navheader';
import Footer from '../../components/Footer';

function ManageUser() {
  const [image, setImage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    // Handle file change
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className='container'>
      <Navbar />
      <Navheader />
      <Footer />
      <div className='main'>
        <div>
          <div id="msg"></div>
          <form onSubmit={handleSubmit} id="manage-user">
            <table>
              <input type="hidden" name="id" />
              <tr>
                <td>
                  <label htmlFor="firstname">First Name</label>
                </td>
                <td>
                  <input type="text" className='inp-box' name="firstname" id="firstname" required />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="lastname">Last Name</label>
                </td>
                <td>
                  <input type="text" className='inp-box' name="lastname" id="lastname" required />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="username">Username</label>
                </td>
                <td>
                  <input type="text" className='inp-box' name="username" id="username" required autoComplete="off" />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="password">Password</label>
                </td>
                <td>
                  <input type="password" className='inp-box' name="password" id="password" autoComplete="off" required />
                  <small>
                    <i>Leave this blank if you don't want to change the password.</i>
                  </small>
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="type">User Type</label>
                </td>
                <td>
                  <select className='inp-box' name="type" id="type" required>
                    <option value="1" selected>
                      Administrator
                    </option>
                    <option value="2">Staff</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>
                  <label className='center' htmlFor="customFile">Avatar</label>
                </td>
                <td>
                  <div className="file-input">
                    <input className='inp-box' type="file" id="customFile" name="img" onChange={handleFileChange} />
                    <label htmlFor="customFile">
                      Choose file
                    </label>
                  </div>
                  {image && (
                    <div className="image-preview">
                      <div className="rounded-image-container">
                        <img src={image} alt="avatar" className="rounded-image" id="cimg" />
                      </div>
                    </div>
                  )}
                </td>
              </tr>
            </table>
          </form>
        </div>
        <div className="buttons-row">
          <Link to="/userlist" className="button-type" onClick={() => navigate('/userlist')}>
            Cancel
          </Link>
          <Link to="/userlist" className="button-type" onClick={() => navigate('/userlist')}>
            Save
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ManageUser;
