import React, { Component } from "react";
import ListPage from "../../common/listPage";

const posts = [
  { id: 1, title: "Hello World-coding", content: "Welcome to learning React!" },
  { id: 2, title: "Installation", content: "You can install React from npm." }
];

class Coding extends Component {
  render() {
    return (
      <div className="nav-text">
        <h1>Coding fun page</h1>
        <ListPage items={posts} />
      </div>
    );
  }
}

export default Coding;
