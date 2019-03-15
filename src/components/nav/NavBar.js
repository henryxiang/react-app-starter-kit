import React from 'react';
// import { Nav } from 'react-bootstrap'
import AlertsDropDown from './AlertsDropDown';
import MessagesDropDown from './MessagesDropDown';
import UserDropDown from './UserDropDown';

export default () => (
  // <Nav className="justify-content-end" activeKey="/home">
  //   <Nav.Item>
  //     <Nav.Link href="/home">Active</Nav.Link>
  //   </Nav.Item>
  //   <Nav.Item>
  //     <Nav.Link eventKey="link-1">Link</Nav.Link>
  //   </Nav.Item>
  //   <Nav.Item>
  //     <Nav.Link eventKey="link-2">Link</Nav.Link>
  //   </Nav.Item>
  //   <Nav.Item>
  //     <Nav.Link eventKey="disabled" disabled>
  //       Disabled
  //     </Nav.Link>
  //   </Nav.Item>
  // </Nav>
  <ul className="navbar-nav ml-auto ml-md-0">
    <AlertsDropDown />
    <MessagesDropDown />
    <UserDropDown />
  </ul>
)