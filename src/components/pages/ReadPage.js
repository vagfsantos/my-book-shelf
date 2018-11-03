import React from "react";
import PropTypes from "prop-types";

import SingleShelfPage from "./components/single-shelf-page";
import BookEntity from "../book/entity/BookEntity";
import { shelfFilter } from "../../utils/shelf/shelf-filter";

const ReadPage = props => (
  <SingleShelfPage
    title="Already Read"
    subtitle="Look how much you've done so far"
    books={shelfFilter.getAlreadyRead(props.books)}
    isLoading={props.isLoading}
  />
);

ReadPage.propTypes = {
  books: PropTypes.arrayOf(BookEntity),
  isLoading: PropTypes.bool.isRequired
};

export default ReadPage;
