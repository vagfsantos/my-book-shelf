import React, { Component } from "react";
import PropTypes from "prop-types";

import BookEntity from "./entity/BookEntity";

import BookImage from "./components/BookImage";
import BookInfo from "./components/BookInfo";
import BookTags from "./components/BookTags";
import BookStatus from "./components/BookStatus";

class BookCard extends Component {
  static propTypes = {
    bookInfo: BookEntity.isRequired,
    onBookStatusChange: PropTypes.func.isRequired
  };

  render() {
    const {
      id,
      shelf = "none",
      title = "",
      subtitle = "",
      description = "",
      categories = [],
      imageLinks = { thumbnail: "" }
    } = this.props.bookInfo;
    const { thumbnail } = imageLinks;
    const { onBookStatusChange } = this.props;

    return (
      <div className="book-card box has-background-light">
        <div className="media">
          <BookImage imageURL={thumbnail} imageDescription={title} />
          <div className="media-content">
            <BookInfo
              title={title}
              subtitle={subtitle}
              description={description}
            />
            <BookTags categories={categories} />
            <BookStatus
              bookID={id}
              activeShelf={shelf}
              onBookStatusChange={onBookStatusChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default BookCard;
