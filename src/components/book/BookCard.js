import React, { Component } from "react";

import BookEntity from "./entity/BookEntity";

import BookImage from "./components/BookImage";
import BookInfo from "./components/BookInfo";
import BookTags from "./components/BookTags";

class BookCard extends Component {
  render() {
    const {
      title = "",
      subtitle = "",
      description = "",
      categories = [],
      thumbnail = ""
    } = this.props;

    return (
      <div className="box">
        <div className="media">
          <BookImage imageURL={thumbnail} imageDescription={title} />
          <div className="media-content">
            <BookInfo
              title={title}
              subtitle={subtitle}
              description={description}
            />
            <BookTags categories={categories} />
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
