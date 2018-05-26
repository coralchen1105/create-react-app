import React, { Component } from "react";

class AddNewArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: { title: "", type: "", content: "", date: "" },
      errors: {}
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleChange(event) {
    var article = Object.assign({}, this.state.article);
    article[event.target.name] = event.target.value;
    this.setState({ article: article });
  }

  handleFormSubmit(event) {
    event.preventDefault();
    console.log(
      "you have submit: " +
        "title: " +
        this.state.article.title +
        " type: " +
        this.state.article.type +
        " content: " +
        this.state.article.content +
        " date: " +
        this.state.article.date
    );
  }
  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <h1>Add New Article</h1>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <div className="field">
            <input
              type="text"
              name="title"
              className="form-control"
              placeholder="title"
              value={this.state.article.title}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="content">Content</label>
          <div className="field">
            <input
              type="text"
              name="content"
              className="form-control"
              placeholder="content"
              value={this.state.article.content}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="type">Type:</label>
          <div className="field">
            <input
              type="radio"
              name="type"
              className="form-control"
              value="coding"
              checked={this.state.article.type === "coding"}
              onChange={this.handleChange}
            />Coding
            <input
              type="radio"
              name="type"
              className="form-control"
              value="building"
              checked={this.state.article.type === "building"}
              onChange={this.handleChange}
            />building
            <input
              type="radio"
              name="type"
              className="form-control"
              value="interesting"
              checked={this.state.article.type === "interesting"}
              onChange={this.handleChange}
            />Interesting Article
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <div className="field">
            <input
              type="date"
              name="date"
              className="form-control"
              value={this.state.article.date}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <input type="submit" value="Save" className="btn btn-default" />
      </form>
    );
  }
}

export default AddNewArticle;
