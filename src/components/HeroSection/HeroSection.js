import React from "react";
import PropTypes from "prop-types";

const HeroSection = props => (
  <section
    className={`hero is-link ${props.isFullHeight ? "is-fullheight" : null} ${
      props.sizeClass
    }`}
  >
    <div className="hero-body">
      <div className="container has-text-centered">
        {props.title && <h1 className="title is-1">{props.title}</h1>}
        {props.subtitle && <h2 className="subtitle">{props.subtitle}</h2>}
        {props.children}
      </div>
    </div>
  </section>
);

HeroSection.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  isFullHeight: PropTypes.bool,
  sizeClass: PropTypes.string,
  children: PropTypes.element
};

export default HeroSection;
