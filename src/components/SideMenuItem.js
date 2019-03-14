import React from 'react';
import { Link } from 'react-router-dom';
import * as svgIcon from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome';

const styles = {
  title: {
    display: 'inline-block',
    marginLeft: '0.5rem',
  },
};

export default ({ title, faIcon, link }) => (
  <li className="nav-item active">
    <Link className="nav-link bg-secondary border" to={link}>
      <FA icon={svgIcon[faIcon]} />
      <span style={styles.title}>{title}</span>
    </Link>
  </li>
)