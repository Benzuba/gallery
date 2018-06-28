import React from 'react';
import {NavLink} from 'react-router-dom';


const Nav = props => (
  <div>

      <nav className="main-nav">
        <ul>
          <li><NavLink to="/Cats">Cats</NavLink></li>
          <li><NavLink to="/Dogs">Dogs</NavLink></li>
          <li><NavLink to="/Computers">Computers</NavLink></li>
          <li><NavLink to="/SearchForm">Search</NavLink></li>
        </ul>
      </nav>
  </div>
);

export default Nav;
