import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import moment from 'moment';
import { APP_NAME } from '../constants';
import { getEmployees } from '../services/employee';

const columns = [
  { dataField: 'name', text: 'Employee Name', sort: true, headerStyle: { width: '20%'} },
  { dataField: 'position', text: 'Job Title', sort: true, headerStyle: { width: '25%'} },
  { dataField: 'office', text: 'Office Location', sort: true, headerStyle: { width: '15%'} },
  { dataField: 'age', text: 'Age', sort: true, headerStyle: { width: '10%' } }, 
  { dataField: 'startDate', text: 'startDate', sort: true, headerStyle: { width: '10%'},
    formatter: (d) => moment(d).format('YYYY-MM-DD')
  },
  { dataField: 'salary', text: 'Salary', sort: true, headerStyle: { width: '15%' },
    formatter: (n) => n.toLocaleString('en-US', { style: 'currency', currency: 'USD' }) 
  },
];

const options = {
  bootstrap4: true,
  condensed: true,
  hover: true,
  striped: true,
};

export default () => {
  const employees = getEmployees(100);
  const pagination = paginationFactory({
    sizePerPage: 10,
    showTotal: true,
  });
  return (
    <div className="container-fluid bg-light">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <a href="/#">{APP_NAME}</a>
        </li>
        <li className="breadcrumb-item active">Employee Table</li>
      </ol>
      <div>
        <BootstrapTable keyField="id" data={employees} columns={columns} {...options} pagination={pagination} />
      </div>
    </div>
  );
}