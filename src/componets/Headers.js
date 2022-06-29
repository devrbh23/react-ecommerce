import React, {useState} from 'react';

import NavBar from './navbar/NavBar';
import Offer from './Offer';
import Slide from './Slide';
import Footer from './Footer';
import ContactUs from './ContactUs';
import SignIn from './SignIn';
import Content from './Content';

function Headers() {
  const [state, setState] = useState({
    showContent: 'home',
  });
  const contact = e => {
    setState({showContent: 'contact'});
    console.log(state.showContact);
    e.preventDefault();
  };
  const title = e => {
    setState({showContent: 'home'});
    console.log(state.showContent);
    e.preventDefault();
  };
  const signIn = e => {
    setState({showContent: 'signin'});
    console.log(state.showContent);
    e.preventDefault();
  };
  return (
    <React.Fragment>
      <div className="headerContainer">
        <div className="headerSection">
          <div className="detail">
            <div className="contact">
              <div>
                <a className="contactUs" href="Contact" onClick={contact}>
                  Contact Us
                </a>
              </div>
              <div>
                <a className="number" href="#/">
                  9843561293
                </a>
              </div>
            </div>
            <div className="currency">
              <p>
                Currency:
                <select>
                  <option>Aud</option>
                  <option>usd</option>
                  <option>euro</option>
                  <option>nepali</option>
                </select>
              </p>
            </div>
          </div>

          <div className="title" onClick={title}>
            <h1>Hamro Pasal</h1>
          </div>
          <div className="profileSide">
            <div>
              <img
                className="profile-img"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1024px-Circle-icons-profile.svg.png"
                alt=""
              ></img>
              <button className="signIN" onClick={signIn}>
                Sign In
              </button>
            </div>
            <div>
              <img
                className="cart"
                src="https://pngimg.com/uploads/shopping_cart/shopping_cart_PNG17.png"
                alt=""
              ></img>
              <button className="addCart">Add cart</button>
            </div>
          </div>
        </div>
        <div>
          <NavBar></NavBar>
        </div>
      </div>
      <Offer></Offer>
      {state.showContent === 'contact' ? (
        <ContactUs></ContactUs>
      ) : (
        <React.Fragment>
          {state.showContent === 'signin' ? (
            <SignIn></SignIn>
          ) : (
            <React.Fragment>
              <Slide></Slide>
              <Content></Content>
              <Footer></Footer>
            </React.Fragment>
          )}
        </React.Fragment>
      )}
    </React.Fragment>
  );
}
export default Headers;
