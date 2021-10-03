import React from "react";

const style = {
  width: "300px",
  margin: "10px auto",
  display: "grid",
  fontSize: "20px",
  fontWeight: "800",
  textAlign: "center",
};

class Message extends React.Component {
  render() {
    return (
      <div data-testid="button">
        <h1 name={"msg"} style={style} className={this.props.className}>
          {this.props.value}
        </h1>
      </div>
    );
  }
}

// module.exports = Message;

export default Message;
