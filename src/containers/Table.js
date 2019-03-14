import React from 'react';
import { APP_NAME } from '../constants';

export default () => (
  <div className="container-fluid bg-light">
    <ol className="breadcrumb">
      <li className="breadcrumb-item">
        <a href="/#">{APP_NAME}</a>
      </li>
      <li className="breadcrumb-item active">Table</li>
    </ol>
    <p>Data Tables to be implemented...</p>
  </div>
)