import React, { Component } from "react";
import ListPage from "../../common/listPage";

const posts = [
  {
    id: 1,
    title: "Hello World-building-web",
    content: "Welcome to learning React!"
  },
  { id: 2, title: "Installation", content: "You can install React from npm." }
];

class Building extends Component {
  render() {
    return (
      <div className="nav-text">
        <h1>Building web</h1>
        <ListPage items={posts} />
      </div>
    );
  }
}

export default Building;
