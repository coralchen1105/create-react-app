import React, { Component } from "react";

class SingleArticle extends Component {
  componentDidMount() {
    var title = this.props.match.params.title;
    console.log(title);
  }

  render() {
    return (
      <div className="nav-text">
        <h1>Single Article page</h1>
      </div>
    );
  }
}

export default SingleArticle;
