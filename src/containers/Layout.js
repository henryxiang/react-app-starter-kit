import '../App.min.css';
import React, { Component } from 'react';
import AppHeader from '../components/AppHeader';
import SideMenu from '../components/SideMenu';
import NavSearch from '../components/NavSearch'

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
        <AppHeader onToggle={this.onToggle}>
          <NavSearch />
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
