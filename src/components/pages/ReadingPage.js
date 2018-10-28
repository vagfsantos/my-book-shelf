import React from "react";
import PropTypes from "prop-types";

import BookEntity from "../book/entity/BookEntity";
import Shelf from "../shelf/Shelf";
import HeroSection from "../HeroSection/HeroSection";
import { shelfFilter } from "../../utils/shelf/shelf-filter";

const ReadingPage = props => (
  <div>
    <HeroSection
      title="Reading"
      subtitle="Stick to your reading and grow even more"
      sizeClass="is-medium"
    />

    <div className="container">
      <section className="section">
        <div className="columns">
          <div className="column">
            <Shelf
              title="Currently Reading"
              books={shelfFilter.getCurrentlyReading(props.books)}
              slotsByRow={1}
            />
          </div>
        </div>
      </section>
    </div>
  </div>
);

ReadingPage.propTypes = {
  books: PropTypes.arrayOf(BookEntity)
};

export default ReadingPage;
