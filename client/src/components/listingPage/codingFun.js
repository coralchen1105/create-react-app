import React, { Component } from "react";
import ListPage from "../../common/listPage";

const posts = [
  {
    id: 1,
    type: "coding-fun",
    title: "Hello World-coding",
    content: "Welcome to learning React!"
  },
  {
    id: 2,
    type: "coding-fun",
    title: "Installation",
    content: "You can install React from npm."
  },
  {
    id: 3,
    type: "coding-fun",
    title: "Installation",
    content: "You can install React from npm."
  },
  {
    id: 4,
    type: "coding-fun",
    title: "Installation",
    content: "You can install React from npm."
  },
  {
    id: 5,
    type: "coding-fun",
    title: "Installation",
    content: "You can install React from npm."
  }
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
