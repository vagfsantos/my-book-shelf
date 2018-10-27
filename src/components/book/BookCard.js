import React, { Component } from "react";

import BookEntity from "./entity/BookEntity";

import BookImage from "./components/BookImage";
import BookInfo from "./components/BookInfo";
import BookTags from "./components/BookTags";
import BookStatus from "./components/BookStatus";

class BookCard extends Component {
  render() {
    const {
      id,
      shelf,
      title = "",
      subtitle = "",
      description = "",
      categories = [],
      imageLinks: { thumbnail = "" }
    } = this.props.bookInfo;

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
            <BookStatus bookID={id} activeShelf={shelf} />
          </div>
        </div>
      </div>
    );
  }
}

BookCard.propTypes = {
  bookInfo: BookEntity.isRequired
};

export default BookCard;
