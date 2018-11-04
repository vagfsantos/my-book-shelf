import React from "react";
import PropTypes from "prop-types";

import BookEntity from "../../book/entity/BookEntity";
import Shelf from "../../shelf/Shelf";
import HeroSection from "../../HeroSection/HeroSection";

const SingleShelfPage = props => (
  <div>
    <HeroSection
      title={props.title}
      subtitle={props.subtitle}
      sizeClass="is-medium"
    />

    <div className="container">
      <section className="section">
        <div className="columns">
          <div className="column">
            <Shelf
              title={props.title}
              books={props.books}
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

SingleShelfPage.propTypes = {
  books: PropTypes.arrayOf(BookEntity),
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  onBookStatusChange: PropTypes.func.isRequired
};

export default SingleShelfPage;
