import React from 'react';
import { APP_NAME } from '../constants';
import IconCard from '../components/IconCard';

const newsItems = [
  {
    title: '26 New Messages!',
    type: 'primary',
    faIcon: 'faComments',
  },
  {
    title: '10 New Tasks!',
    type: 'warning',
    faIcon: 'faList',
  },
  {
    title: '123 New Orders!',
    type: 'success',
    faIcon: 'faShoppingCart',
  },
  {
    title: '13 New Tickets!',
    type: 'danger',
    faIcon: 'faLifeRing',
  },
]
export default () => (
  <div className="container-fluid bg-light">
    <ol className="breadcrumb">
      <li className="breadcrumb-item">
        <a href="/#">{APP_NAME}</a>
      </li>
      <li className="breadcrumb-item active">Dashboard</li>
    </ol>
    <div className="row">
    {
      newsItems.map(item => <IconCard key={item.title} {...item} />)
    }
    </div>
  </div>
)