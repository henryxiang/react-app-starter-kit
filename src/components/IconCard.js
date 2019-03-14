import React from 'react'
import * as svgIcon from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome';

export default ({ title, faIcon, type = 'primary' }) => (
  <div className="col-xl-3 col-sm-6 mb-3">
    <div className={`card text-white o-hidden h-100 bg-${type}`}>
      <div className="card-body">
        <div className="card-body-icon">
          <FA icon={svgIcon[faIcon]} />
        </div>
        <div className="mr-5">{title}</div>
      </div>
      <a className="card-footer text-white clearfix small z-1" href="/#">
        <span className="float-left">View Details</span>
        <span className="float-right">
          <FA icon={svgIcon.faAngleRight} />
        </span>
      </a>
    </div>
  </div>
);
