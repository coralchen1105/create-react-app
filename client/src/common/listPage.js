import React, { Component } from "react";

const List = props => {
  const itemValue = props.items;
  const eachRow = itemValue.map(eachValue => (
    <tr key={eachValue.id}>
      <td>{eachValue.title}</td>
      <td>{eachValue.content}</td>
    </tr>
  ));
  return <tbody>{eachRow}</tbody>;
};

class Listing extends Component {
  constructor(props) {
    super(props);
    this.state = { data: this.props.items };
  }

  render() {
    return (
      <table>
        <List items={this.state.data} />
      </table>
    );
  }
}

export default Listing;
