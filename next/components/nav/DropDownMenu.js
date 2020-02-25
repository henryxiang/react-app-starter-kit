import { Component } from 'react';
import IconLink from './IconLink';

class DropDownMenu extends Component {
  state = {
    isVisible: false,
  }

  showMenu = () => {this.setState({ isVisible: true })}

  hideMenu = () => {this.setState({ isVisible: false })}

  render() {
    const { faIcon, badge } = this.props
    const { isVisible } = this.state
    const show = isVisible ? 'show' : ''
    return (
      <li className="nav-item dropdown no-arrow mx-1"
          onMouseEnter={this.showMenu}
          onMouseLeave={this.hideMenu}
      >
        <IconLink faIcon={faIcon} badge={badge} />
        <div className={`dropdown-menu dropdown-menu-right ${show}`} aria-labelledby="alertsDropdown">
        {
          this.props.children
        }
        </div>
      </li>
    )
  }
}

export default DropDownMenu