import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import './scss/app.scss';
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from './views/Layout';
import routes from './routes'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
          {
            routes.map(r => <Route key={r.title} exact path={r.link} render={() => <r.view />} />)
          }
          </Switch>  
        </Layout>
      </BrowserRouter>
      
    );
  }
}

export default App;
