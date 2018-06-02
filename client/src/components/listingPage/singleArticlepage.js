import React from "react";

const SingleArticle = ({ match, data }) => {
  var post = data.find(p => p.title === String(match.params.title));
  var postData;

  if (post)
    postData = (
      <div>
        <h3> {post.title} </h3>
        <p>{post.content}</p>
        <hr />
      </div>
    );
  else postData = <h2> Sorry. Product doesnt exist </h2>;

  return (
    <div>
      <div>{postData}</div>
    </div>
  );
};

export default SingleArticle;
