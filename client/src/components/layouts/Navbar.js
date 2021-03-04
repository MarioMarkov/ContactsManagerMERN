import React, { Fragment, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';


const Navbar = ({ title, icon }) => {

  return (
    <div className='navbar bg-primary'>
      <h1>
        <Link to='/'>
          <i className={icon} /> {title}
        </Link>
      </h1>
      <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
      </ul>
    </div>
  );
};


Navbar.defaultProps = {
  title: 'Contact Keeper',
  icon: 'fas fa-id-card-alt'
};

export default Navbar;