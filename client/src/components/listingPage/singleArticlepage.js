import React from "react";

const SingleArticle = ({ match }) => {
  var title = String(match.params.title);
  var date = match.params.date;

  return (
    <div>
      <div>{title}</div>
      <br />
      <div>{date}</div>
    </div>
  );
};

export default SingleArticle;
