import '../scss/app.scss';
import { Component } from 'react';
import Head from 'next/head';
import { APP_NAME } from '../constants';
import AppHeader from './AppHeader';
import SideMenu from './SideMenu';
import NavSearch from './NavSearch'
import NavBar from './nav/NavBar';

class Layout extends Component {
  state = {
    sideMenu: '',
  }

  onToggle = () => {
    const sideMenu = this.state.sideMenu ? '' : 'toggled';
    this.setState({ sideMenu });  
  }

  render() {
    return (
      <div>
        <Head>
          <title>{APP_NAME}</title>
        </Head>
        <AppHeader onToggle={this.onToggle}>
          <NavSearch />
          <NavBar />
        </AppHeader>
        <div id="wrapper">
          <SideMenu toggled={this.state.sideMenu} />
          <div id="content-wrapper">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default Layout;
