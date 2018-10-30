import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const Menu = props => (
  <div className={`navbar-menu ${props.isActive ? "is-active" : null}`}>
    <div className="navbar-start">
      {props.menuItems.map(menuItem => (
        <NavLink
          to={menuItem.link}
          key={menuItem.name}
          onClick={props.clickHandler}
          className="navbar-item"
          activeClassName="is-active"
        >
          {menuItem.name}
        </NavLink>
      ))}
    </div>
    <div className="navbar-end">
      <NavLink
        onClick={props.clickHandler}
        to="/search"
        className="navbar-item"
        activeClassName="is-active"
      >
        <span className="icon">
          <i className="fa fa-search" />
        </span>
        <span>Search a new book</span>
      </NavLink>
    </div>
  </div>
);

Menu.propTypes = {
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })
  ).isRequired,
  isActive: PropTypes.bool.isRequired,
  clickHandler: PropTypes.func.isRequired
};

export default Menu;
