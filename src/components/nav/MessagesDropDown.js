import React from 'react';
import DropDownMenu from './DropDownMenu';

export default () => (
  <li className="nav-item dropdown no-arrow mx-1">
    <DropDownMenu faIcon="faEnvelope" badge="7">
      <a className="dropdown-item" href="/#">Action</a>
      <a className="dropdown-item" href="/#">Another action</a>
      <div className="dropdown-divider"></div>
      <a className="dropdown-item" href="/#">Something else here</a>
    </DropDownMenu> 
  </li>
)
