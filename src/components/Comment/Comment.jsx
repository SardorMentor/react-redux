import React from "react";

import "./comment.css";

const Comment = (props) => {
  return (
    <div className="comment">
      <h4 className="comment__title">{props.title}</h4>
      <p className="comment__text">{props.text}</p>
    </div>
  );
};

export default Comment;
