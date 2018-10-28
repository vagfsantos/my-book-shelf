import React, { Component } from "react";

import Menu from "./components/Menu";
import Brand from "./components/Brand";
import BurgerMenu from "./components/BurgerMenu";

import menuItems from "./data/menuItems";

class Header extends Component {
  state = {
    isMenuOpened: false
  };

  toggleMobileMenu = event => {
    event.preventDefault();
    this.setState(currentState => ({
      isMenuOpened: !currentState.isMenuOpened
    }));
  };

  closeMobileMenu = () => {
    this.setState({ isMenuOpened: false });
  };

  render() {
    return (
      <header>
        <nav
          className="navbar is-fixed-top is-link"
          role="navigation"
          aria-label="main navigation"
        >
          <Brand brandName="My Book Shelf" brandImagePath="/images/logo.svg">
            <BurgerMenu clickHandler={this.toggleMobileMenu} />
          </Brand>
          <Menu
            clickHandler={this.closeMobileMenu}
            menuItems={menuItems}
            isActive={this.state.isMenuOpened}
          />
        </nav>
      </header>
    );
  }
}

export default Header;
