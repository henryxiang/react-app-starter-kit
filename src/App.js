import './App.min.css';
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Layout from './containers/Layout';
import Dashboard from './containers/Dashboard'
import Info from './containers/Info'
import Chart from './containers/Chart'
import Table from './containers/Table'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Route path="/" exact render={() => <Dashboard />} />
          <Route path="/info" exact render={() => <Info />} />
          <Route path="/chart" exact render={() => <Chart />} />
          <Route path="/table" exact render={() => <Table />} />
        </Layout>
      </BrowserRouter>
      
    );
  }
}

export default App;
