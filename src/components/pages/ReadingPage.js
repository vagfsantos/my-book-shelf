import React from "react";
import PropTypes from "prop-types";

import BookEntity from "../book/entity/BookEntity";
import Shelf from "../shelf/Shelf";
import { shelfFilter } from "../../utils/shelf/shelf-filter";

const ReadingPage = props => (
  <div>
    <section className="hero is-link is-medium">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title is-1">Reading</h1>
          <h2 className="subtitle">This is your shelf</h2>
        </div>
      </div>
    </section>

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
