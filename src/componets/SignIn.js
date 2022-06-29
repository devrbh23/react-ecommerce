import React, {useState} from 'react';
function SignIn() {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const [newUser, setNewUser] = useState({
    account: false,
  });
  const input = e => {
    setUser({...user, [e.target.name]: e.target.value});
    console.log(e.target.value);
  };
  const signIn = e => {};
  const createAccount = e => {
    setNewUser({account: true});
    e.preventDefault();
  };
  return (
    <React.Fragment>
      {newUser.account === true ? (
        <div>
          <img src={require('./ab.png')} alt="xxxxx"></img>
        </div>
      ) : (
        <div className="accountSection">
          <div className="signIn">
            <h1>Sign In</h1>
          </div>
          <div className="newAccount">
            <form className="form" onSubmit={signIn}>
              <div className="input">
                <p>Email:</p>
                <input
                  type="email"
                  className="email"
                  onChange={input}
                  name="email"
                  value={user.email}
                ></input>
                <p className="password">password:</p>
                <input
                  type="password"
                  className="email"
                  onChange={input}
                  name="password"
                  value={user.password}
                ></input>
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
              <button className="createAccount" onClick={createAccount}>
                Create Account
              </button>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}
export default SignIn;
