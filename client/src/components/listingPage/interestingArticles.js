import React, { Component } from "react";
import ListPage from "../../common/listPage";

const posts = [
  {
    id: 1,
    title: "Hello World-interesting-article",
    content: "Welcome to learning React!"
  },
  { id: 2, title: "Installation", content: "You can install React from npm." }
];

class InterestingArticle extends Component {
  render() {
    return (
      <div className="nav-text">
        <h1>Interesting Article page</h1>
        <ListPage items={posts} />
      </div>
    );
  }
}

export default InterestingArticle;
