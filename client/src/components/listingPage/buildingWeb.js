import React, { Component } from "react";
import ListPage from "../../common/listPage";
import ArticleApi from "../../api/articleApi";
import SingleArticle from "./singleArticlepage";
import { Link } from "react-router-dom";

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
                  <Link
                    to={`${this.props.match.url}/${post.date}/${post.title}`}
                  >
                    {post.title}
                  </Link>
                </td>
                <td>{post.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Building;
