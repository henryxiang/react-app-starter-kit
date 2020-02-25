import React from 'react';
import * as svgIcon from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome';
import { Badge } from 'react-bootstrap';

const styles = {
  badge: {
    display: 'inline-block',
    marginLeft: '-5px',
  },
};

export default ({ faIcon, badge = null, type =  "danger" }) => (
  <a className="nav-link dropdown-toggle" href="./#" role="button" 
      data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
  >
    <FA icon={svgIcon[faIcon]} />
    {
      badge ? <Badge variant={type} style={styles.badge}>{badge}</Badge>: null
    }
  </a> 
);
