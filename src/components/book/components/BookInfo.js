import React from "react";
import PropTypes from "prop-types";

import textUtil from "../../../utils/textUtil";

const BookInfo = props => (
  <div>
    <p className="title is-4">{props.title}</p>
    <p className="subtitle is-6">{props.subtitle}</p>
    <div className="content">
      {textUtil.getSummarizedText(props.description, 100)}
    </div>
  </div>
);

BookInfo.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default BookInfo;
