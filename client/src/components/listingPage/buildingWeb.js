import React, { Component } from "react";
import ListPage from "../../common/listPage";
import ArticleApi from "../../api/articleApi";

class Building extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: ArticleApi.getArticlesByType("building")
    };
  }

  render() {
    return (
      <div className="nav-text">
        <h1>Coding fun page</h1>
        <ListPage items={this.state.posts} pageName="building-web" />
      </div>
    );
  }
}

export default Building;
