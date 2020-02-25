import Link from 'next/link';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome';
import { APP_NAME } from '../constants';

export default ({ onToggle, children }) => (
  <nav className="navbar navbar-expand navbar-dark bg-dark static-top">
    <Link href="/">
      <a className="navbar-brand mr-1">{APP_NAME}</a>
    </Link>
    <button
      className="btn btn-link btn-sm text-white order-1 order-sm-0"
      onClick={onToggle}
    >
      <FA icon={faBars} />
    </button>
   { children }
  </nav>
)