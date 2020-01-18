import React from 'react';
function SignIn() {
  return (
    <div className="accountSection">
      <div className="signIn">
        <h1>Sign In</h1>
      </div>
      <div className="newAccount">
        <form className="form">
          <div className="input">
            <p>Email:</p>
            <input type="email" className="email"></input>
            <p className="password">password:</p>
            <input type="password" className="email"></input>
          </div>
          <div className="submitSide">
            <input
              type="submit"
              value="SignIn"
              className="signInButtom"
            ></input>
            <a href="/#" className="fPassword">
              Forget Password?
            </a>
          </div>
        </form>
        <div className="addAccount">
          <h1>New Customer?</h1>
          <p>Create an account with us and you'll be able to:</p>
          <ul className="list">
            <li>Check out faster</li>
            <li>Save multiple shipping addresses</li>
            <li>Access your order history</li>
            <li>Track new orders</li>
          </ul>
          <button className="createAccount">Create Account</button>
        </div>
      </div>
    </div>
  );
}
export default SignIn;
