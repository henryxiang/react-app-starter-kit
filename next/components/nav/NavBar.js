import AlertsDropDown from './AlertsDropDown';
import MessagesDropDown from './MessagesDropDown';
import UserDropDown from './UserDropDown';

export default () => (
  <ul className="navbar-nav ml-auto ml-md-0">
    <AlertsDropDown />
    <MessagesDropDown />
    <UserDropDown />
  </ul>
)