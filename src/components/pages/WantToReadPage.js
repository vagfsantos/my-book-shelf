import React from "react";
import PropTypes from "prop-types";

import BookEntity from "../book/entity/BookEntity";
import Shelf from "../shelf/Shelf";
import HeroSection from "../HeroSection/HeroSection";
import { shelfFilter } from "../../utils/shelf/shelf-filter";

const WantToReadPage = props => (
  <div>
    <HeroSection
      title="Want to read"
      subtitle="Start to read what you love"
      sizeClass="is-medium"
    />

    <div className="container">
      <section className="section">
        <div className="columns">
          <div className="column">
            <Shelf
              title="Want to read"
              books={shelfFilter.getWantToRead(props.books)}
              slotsByRow={1}
            />
          </div>
        </div>
      </section>
    </div>
  </div>
);

WantToReadPage.propTypes = {
  books: PropTypes.arrayOf(BookEntity)
};

export default WantToReadPage;
