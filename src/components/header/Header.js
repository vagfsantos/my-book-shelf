import React from "react";

import Menu from "./components/Menu";
import Brand from "./components/Brand";
import menuItems from "./data/menuItems";

const Header = () => (
  <header>
    <nav
      className="navbar is-fixed-top is-link"
      role="navigation"
      aria-label="main navigation"
    >
      <Brand brandName="My Book Shelf" brandImagePath="/images/logo.svg" />
      <Menu menuItems={menuItems} />
    </nav>
  </header>
);

export default Header;
