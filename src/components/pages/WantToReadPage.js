import React from "react";
import PropTypes from "prop-types";

import SingleShelfPage from "./components/single-shelf-page";

import BookEntity from "../book/entity/BookEntity";
import { shelfFilter } from "../../utils/shelf/shelf-filter";

const WantToReadPage = props => (
  <SingleShelfPage
    title="Want to read"
    subtitle="Start to read what you love"
    books={shelfFilter.getWantToRead(props.books)}
    isLoading={props.isLoading}
  />
);

WantToReadPage.propTypes = {
  books: PropTypes.arrayOf(BookEntity),
  isLoading: PropTypes.bool.isRequired
};

export default WantToReadPage;
