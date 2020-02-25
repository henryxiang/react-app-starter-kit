import DropDownMenu from './DropDownMenu'

export default () => (
  <li className="nav-item dropdown no-arrow">
    <DropDownMenu faIcon="faUserCircle">
      <a className="dropdown-item" href="./#">Settings</a>
      <a className="dropdown-item" href="./#">Activity Log</a>
      <div className="dropdown-divider"></div>
      <a className="dropdown-item" href="./#" data-toggle="modal" data-target="#logoutModal">Logout</a>
    </DropDownMenu>
  </li>
)
