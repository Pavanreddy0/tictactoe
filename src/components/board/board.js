import React from "react";
import Box from "../box/box";

const styles = {
  width: "250px",
  height: "250px",
  margin: "0 auto",
  display: "grid",
  gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)",
};
class Board extends React.Component {
  render() {
    return (
      <div style={styles} className={this.props.className} data-testid="board">
        {[...Array(9)].map((_, pos) => (
          <Box
            key={pos}
            name={pos}
            onClick={() => this.props.onClick(pos)}
            value={this.props.value[pos]}
          />
        ))}
      </div>
    );
  }
}

export default Board;
