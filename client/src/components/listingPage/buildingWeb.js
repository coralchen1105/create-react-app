import React, { Component } from "react";
import ListPage from "../../common/listPage";
import ArticleApi from "../../api/articleApi";
import SingleArticle from "./singleArticlepage";
import About from "../about";
// import Product from "./product";
import { Link, Route } from "react-router-dom";

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
        <table>
          <tbody>
            {this.state.posts.map(post => (
              <tr key={post.id}>
                <td>
                  <Link to={`${this.props.match.url}/${post.title}`}>
                    {post.title}
                  </Link>
                </td>
                <td>{post.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Route
          path={`${this.props.match.url}/:title`}
          render={props => <SingleArticle data={this.state.posts} {...props} />}
        />
        <Route path={`${this.props.match.url}/about-us`} component={About} />
      </div>
    );
  }
}

export default Building;
