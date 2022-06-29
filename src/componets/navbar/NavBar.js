import React, {useState} from 'react';

import {FaSearch} from 'react-icons/fa';

function NavBar() {
  const [search, setSearch] = useState({
    searchFeild: false,
  });
  const searchButton = (e) => {
    setSearch({searchFeild: !search.searchFeild});
    console.log(search.searchFeild);
  };
  const find = (e) => {};

  return (
    <div className="toolbar">
      <ul className="navBar1">
        <div className="navBar">
          <li className="newItem"> WHAT'S NEW</li>
          <li className="Sale">Sale</li>
          <li className="Men">Men</li>
          <li className="Women">Women</li>
          <li className="Curve">Curve</li>
          <li className="Family">Family</li>
        </div>
      </ul>
      <div className="search">
        {search.searchFeild && (
          <input type="text" className="searchField" onChange={find}></input>
        )}

        <FaSearch className="searchIcon" onClick={searchButton} />
      </div>
    </div>
  );
}
export default NavBar;
