import React from "react";
import PropTypes from "prop-types";

import BookEntity from "../book/entity/BookEntity";
import Shelf from "../shelf/Shelf";
import HeroSection from "../HeroSection/HeroSection";
import { shelfFilter } from "../../utils/shelf/shelf-filter";

const ReadPage = props => (
  <div>
    <HeroSection
      title="Read"
      subtitle="Look how much you've done so far"
      sizeClass="is-medium"
    />

    <div className="container">
      <section className="section">
        <div className="columns">
          <div className="column">
            <Shelf
              title="Already Read"
              books={shelfFilter.getAlreadyRead(props.books)}
              slotsByRow={1}
              isLoading={props.isLoading}
            />
          </div>
        </div>
      </section>
    </div>
  </div>
);

ReadPage.propTypes = {
  books: PropTypes.arrayOf(BookEntity)
};

export default ReadPage;
