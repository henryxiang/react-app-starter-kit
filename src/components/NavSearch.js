import React from 'react'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome';

export default () => (
  <form className="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
    <div className="input-group">
      <input type="text" className="form-control" placeholder="Search for..." />
      <div className="input-group-append">
        <button className="btn btn-primary" type="button">
          <FA icon={faSearch} />
        </button>
      </div>
    </div>
  </form>
);
