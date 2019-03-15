import React from 'react';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome';
import { APP_NAME } from '../constants';

export default ({ onToggle, children }) => (
  <nav className="navbar navbar-expand navbar-dark bg-dark static-top">
    <a className="navbar-brand mr-1" href="index.html">{APP_NAME}</a>
    <button
      className="btn btn-link btn-sm text-white order-1 order-sm-0"
      onClick={onToggle}
    >
      <FA icon={faBars} />
    </button>
   { children }
  </nav>
)