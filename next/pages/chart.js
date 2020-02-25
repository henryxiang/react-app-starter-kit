import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import { APP_NAME } from '../constants';

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const initialState = {
  labels: months,
  datasets: [
    {
      label: 'First Dataset',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 3,
      pointHitRadius: 10,
      data: months.map(() => Math.floor(Math.random() * 100)),
    }
  ]
};

export default class RandomChart extends Component {
  state = initialState;

  componentDidMount() {
		setInterval(() => {
			const oldDataSet = this.state.datasets[0];
			const newData = months.map(() => Math.floor(Math.random() * 100));
			const newDataSet = {...oldDataSet};
			newDataSet.data = newData;
			var newState = {
				...initialState,
				datasets: [newDataSet]
			};
			this.setState(newState);
		}, 1500);
  }
  
  render() {
    return (
      <div className="container-fluid bg-light">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="./#">{APP_NAME}</a>
          </li>
          <li className="breadcrumb-item active">Random Line Chart</li>
        </ol>
        <Line data={this.state} />
      </div>
    )
  }
}