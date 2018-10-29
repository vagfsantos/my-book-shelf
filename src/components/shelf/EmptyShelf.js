import React from "react";
import { Link } from "react-router-dom";

const EmptyShelf = () => (
  <div className="message is-danger">
    <div className="message-body">
      Nothing Here. What about <Link to="/search">Search</Link> some books?
    </div>
  </div>
);

export default EmptyShelf;
