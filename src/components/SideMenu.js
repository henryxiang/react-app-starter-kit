import React from 'react';
import MenuItem from './SideMenuItem';
import routes from '../routes'

export default ({ toggled }) => (
  <ul className={`sidebar navbar-nav bg-white pt-3 ${toggled}`}>
  {
    routes.map(r => <MenuItem key={r.title} title={r.title} faIcon={r.faIcon} link={r.link} />)
  }
  </ul>
)