import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Navheader from '../../components/Navheader';
import Footer from '../../components/Footer';

const Profile = () => {
    const [image, setImage] = useState('');
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
    const navigate = useNavigate();
  return (
    <div className='container'>
    <Navbar />
    <Navheader />
    <Footer />

      <div className='main'>
        <div>
          <div id="msg"></div>
          <form onSubmit={handleSubmit} id="manage-user">
            <input type="hidden" name="id" />
            <table>
              <tbody>
                <tr>
                  <td>
                    <label htmlFor="firstname">First Name</label>
                  </td>
                  <td>
                    <input type="text" name="firstname" id="firstname" required />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="lastname">Last Name</label>
                  </td>
                  <td>
                    <input type="text" name="lastname" id="lastname" required />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="username">Username</label>
                  </td>
                  <td>
                    <input type="text" name="username" id="username" required autoComplete="off" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="password">Password</label>
                  </td>
                  <td>
                    <input type="password" name="password" id="password" autoComplete="off" />
                    <small>
                      <i>Leave this blank if you dont want to change the password.</i>
                    </small>
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
              </tbody>
            </table>
          </form>
        </div>
      
      <div className="buttons-row">
          <Link to="/profile" className="button-type" onClick={() => navigate('/profile')}>
            Update
          </Link>
          
        </div>
        </div>
    </div>
  );
};

export default Profile;
