import React, { Component } from "react";
import ListPage from "../../common/listPage";
import ArticleApi from "../../api/articleApi";

class Coding extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: ArticleApi.getArticlesByType("coding")
    };
  }

  render() {
    return (
      <div className="nav-text">
        <h1>Coding fun page</h1>
        <ListPage items={this.state.posts} pageName="coding-fun" />
      </div>
    );
  }
}

export default Coding;
