import React from 'react';

function Headers() {
  return (
    <div className="headerContainer">
      <div className="detail">
        <div className="contact">
          <h3 className="contactUs">Contact Us</h3>
          <p className="number">9843561293</p>
        </div>
        <div>
          <h4>
            Currency:
            <select>
              <option>Aud</option>
              <option>usd</option>
              <option>euro</option>
              <option>nepali</option>
            </select>
          </h4>
        </div>
      </div>

      <div>
        <h1>Hamro Pasal</h1>
      </div>
      <div>Sign In</div>
      <div>Add Cart</div>
    </div>
  );
}
export default Headers;
