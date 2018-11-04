import React from "react";
import PropTypes from "prop-types";

import BookEntity from "../book/entity/BookEntity";
import Shelf from "../shelf/Shelf";
import HeroSection from "../HeroSection/HeroSection";
import { shelfFilter } from "../../utils/shelf/shelf-filter";

const HomePage = props => (
  <div>
    <HeroSection
      title="Welcome to your book shelfs"
      subtitle="Scrool down in order to see your shelfs"
      sizeClass="is-medium"
      isFullHeight
    />
    <div className="container">
      <section className="section">
        <div className="columns">
          <div className="column">
            <Shelf
              title="Currently Reading"
              books={shelfFilter.getCurrentlyReading(props.books)}
              slotsByRow={1}
              isLoading={props.isLoading}
              onBookStatusChange={props.onBookStatusChange}
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="columns">
          <div className="column">
            <Shelf
              title="Want to Read"
              books={shelfFilter.getWantToRead(props.books)}
              slotsByRow={1}
              isLoading={props.isLoading}
              onBookStatusChange={props.onBookStatusChange}
            />
          </div>
          <div className="column">
            <Shelf
              title="Already Read"
              books={shelfFilter.getAlreadyRead(props.books)}
              slotsByRow={1}
              isLoading={props.isLoading}
              onBookStatusChange={props.onBookStatusChange}
            />
          </div>
        </div>
      </section>
    </div>
  </div>
);

HomePage.propTypes = {
  books: PropTypes.arrayOf(BookEntity),
  isLoading: PropTypes.bool.isRequired,
  onBookStatusChange: PropTypes.func.isRequired
};

export default HomePage;
