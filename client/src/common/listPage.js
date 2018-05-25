import React, { Component } from "react";
import { Link } from "react-router-dom";

class Listing extends Component {
  constructor(props) {
    super(props);
    this.state = { data: this.props.items };
  }

  render() {
    return (
      <table>
        <tbody>
          {this.state.data.map(post => (
            <tr key={post.id}>
              <td>
                <Link to={this.props.pageName + "/" + post.title}>
                  {post.title}
                </Link>
              </td>
              <td>{post.content}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Listing;
