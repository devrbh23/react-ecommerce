import React from 'react';

function Content() {
  return (
    <div>
      <div className="topItem">
        <img className="item" src={require('./Photos/123.jpg')} alt="not" />
        <img className="item" src={require('./Photos/123.jpg')} alt="not" />
        <img className="item" src={require('./Photos/123.jpg')} alt="not" />
      </div>
      <div>
        <img src={require('./Photos/dev.jpg')} alt="not" />
      </div>
      <div>
        <img className="item" src={require('./Photos/123.jpg')} alt="not" />
        <img className="item" src={require('./Photos/123.jpg')} alt="not" />
      </div>
      <div>
        <img className="item" src={require('./Photos/dev.jpg')} alt="not" />
      </div>
    </div>
  );
}
export default Content;
