import React, { Component } from "react";

class SingleArticle extends Component {
  componentDidMount() {
    // title is params set at route
    var title = this.props.match.params.title;
    console.log(title);
    console.log(this.props.location.pathname);
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
