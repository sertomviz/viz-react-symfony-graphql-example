
import React from 'react';
import { NavLink } from 'react-router-dom';

import { ROUTE_COMPANIES, ROUTE_HOME } from '../constants/routeConstants';

export default function Header() {
  return (
      <nav className="navbar navbar-light navbar-expand-lg">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active"><NavLink to={ROUTE_HOME} className="nav-link">Home</NavLink></li>
            <li className="nav-item"><NavLink to={ROUTE_COMPANIES} className="nav-link">Companies</NavLink></li>
          </ul>
        </div>
      </nav>
  );
}
