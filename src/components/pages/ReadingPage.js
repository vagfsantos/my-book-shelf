import React from "react";
import PropTypes from "prop-types";

import SingleShelfPage from "./components/single-shelf-page";
import BookEntity from "../book/entity/BookEntity";
import { shelfFilter } from "../../utils/shelf/shelf-filter";

const ReadingPage = props => (
  <SingleShelfPage
    title="Currently Reading"
    subtitle="Stick to your reading and grow even more"
    books={shelfFilter.getCurrentlyReading(props.books)}
    isLoading={props.isLoading}
    onBookStatusChange={props.onBookStatusChange}
  />
);

ReadingPage.propTypes = {
  books: PropTypes.arrayOf(BookEntity),
  isLoading: PropTypes.bool.isRequired,
  onBookStatusChange: PropTypes.func.isRequired
};

export default ReadingPage;
