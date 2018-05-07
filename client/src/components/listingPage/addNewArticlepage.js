import React, { Component } from "react";

class AddNewArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: { title: "", type: "", content: "", date: "" },
      errors: {}
    };
  }

  render() {
    return (
      <div className="nav-text">
        <h1>Add new article</h1>
      </div>
    );
  }
}

export default AddNewArticle;
