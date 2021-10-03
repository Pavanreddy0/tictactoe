import React, { Component } from "react";

const style = {
  styleborder: "3px solid black",
  fontSize: "40px",
  cursor: "pointer",
};

class Box extends Component {
  render() {
    return (
      <button
        data-testid="box"
        style={style}
        name={this.props.name}
        onClick={this.props.onClick}
        className={this.props.className}
      >
        {this.props.value}
      </button>
    );
  }
}

export default Box;
