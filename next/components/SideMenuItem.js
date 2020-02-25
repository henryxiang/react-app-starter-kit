// import { Link } from 'react-router-dom';
import Link from 'next/link';
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
    <Link href={link}>
      <a className="nav-link bg-secondary border">
        <FA icon={svgIcon[faIcon]} />
        <span style={styles.title}>{title}</span>
      </a>
    </Link>
  </li>
)