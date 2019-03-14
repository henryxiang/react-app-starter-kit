import React from 'react';
import MenuItem from './SideMenuItem';

export default ({ toggled }) => (
  <ul className={`sidebar navbar-nav bg-white pt-3 ${toggled}`}>
    <MenuItem title="Dashboard" faIcon="faTachometerAlt" link="/" />
    <MenuItem title="Information" faIcon="faFolder" link="/info" />
    <MenuItem title="Fancy Charts" faIcon="faChartArea" link="/chart" />
    <MenuItem title="Data Tables" faIcon="faTable" link="/table" />
  </ul>
)