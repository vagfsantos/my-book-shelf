import React, { Component } from "react";

import Menu from "./components/Menu";
import Brand from "./components/Brand";
import menuItems from "./data/menuItems";

class Header extends Component {
  state = {
    isMenuOpened: false
  };

  toggleMobileMenu = e => {
    e.preventDefault();
    this.setState(currentState => ({
      isMenuOpened: !currentState.isMenuOpened
    }));
  };

  render() {
    return (
      <header>
        <nav
          className="navbar is-fixed-top is-link"
          role="navigation"
          aria-label="main navigation"
        >
          <Brand
            brandName="My Book Shelf"
            brandImagePath="/images/logo.svg"
            toggleMobileMenu={this.toggleMobileMenu}
          />
          <Menu menuItems={menuItems} isActive={this.state.isMenuOpened} />
        </nav>
      </header>
    );
  }
}

export default Header;
