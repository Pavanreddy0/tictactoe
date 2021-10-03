import React from "react";
import "./index.css";

const style = {
  width: "250px",
  height: "30px",
  margin: "10px auto",
  display: "grid",
  fontSize: "20px",
  fontWeight: "80",
  cursor: "pointer",
};
class Button extends React.Component {
  render() {
    return (
      <div>
        <button
          data-testid="btn"
          name={"btn"}
          style={style}
          onClick={this.props.onClick}
        >
          {this.props.value}
        </button>
      </div>
    );
  }
}

export default Button;
