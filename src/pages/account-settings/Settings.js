import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Navheader from '../../components/Navheader';
import Footer from '../../components/Footer';

function SystemInformation() {
    const navigate = useNavigate();
  const [logo, setLogo] = useState('');
  const [cover, setCover] = useState('');

  const handleFileChange = (event, setImage) => {
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

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
  };

  return (
    <div className='container'>
         <Navbar />
      <Navheader />
      <Footer />
      <div className='main'>
        <div>
          <h3>System Information</h3>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <table>
              <tbody>
                <tr>
                  <td>
                    <label htmlFor="name">System Name</label>
                  </td>
                  <td>
                    <input type="text" name="name" id="name" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="short_name">System Short Name</label>
                  </td>
                  <td>
                    <input type="text" name="short_name" id="short_name" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="">System Logo</label>
                  </td>
                  <td>
                    <div className="file-input">
                      <input type="file" id="logoFile" name="logo" onChange={(event) => handleFileChange(event, setLogo)} />
                      <label htmlFor="logoFile">Choose file</label>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                  <div className="image-preview">
                      <div className="rounded-image-container">
                    {logo && <img src={logo} alt="logo" className="rounded-image" id="cimg" />}
                    </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="">Cover</label>
                  </td>
                  <td>
                    <div className="file-input">
                      <input type="file" id="coverFile" name="cover" onChange={(event) => handleFileChange(event, setCover)} />
                      <label htmlFor="coverFile">Choose file</label>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                  <div className="cover-container">
                    {cover && <img src={cover} alt="cover" className="cover-image" id="cimg2" />}
                </div>
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
}

export default SystemInformation;
