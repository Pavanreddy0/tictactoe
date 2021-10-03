import React from "react";
import Board from "../board/board";
import Message from "../message/message";
import Button from "../button/button";

class Game extends React.Component {
  state = {
    board: Array(9).fill(""), // gaming board
    player: "X", // current player
    message: "Click on the grid to Start", // message -> which player is playing and if the game is won or draw
    moves: [], // selected position of the player
  };
  winPositions = [
    // possible win position
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  // Function to check if the game is won
  isWon = (board) => {
    let won = false;
    for (let i = 0; i < this.winPositions.length; i++) {
      const [a, b, c] = this.winPositions[i];
      if (board[a] !== "" && board[a] === board[b] && board[b] === board[c]) {
        won = true;
      }
    }
    return won;
  };

  // Function to reset or restart the game
  reset = () => {
    const board = Array(9).fill("");
    const message = "Click on the grid to Start";
    const player = "X";
    this.setState({ board, message, player });
  };

  // Function to handle the undo of the move that was made by player
  handleUndo = () => {
    if (this.state.moves.length === 0) return;
    const moves = [...this.state.moves];
    const move = moves.pop();
    const board = [...this.state.board];
    board[move.pos] = "";
    const player = move.player;
    this.setState({ moves, board, player, message: `TURN: ${player}` });
  };

  handleChange = (pos) => {
    if (this.state.player === "" || this.state.board[pos] !== "") {
      return;
    }
    const board = [...this.state.board];
    board[pos] = this.state.player;
    this.setState({ board }); // updating board for current player

    // Adding the current player and his position to the stack
    const move = { pos: pos, player: this.state.player };
    const moves = [...this.state.moves, move];
    this.setState({ moves });

    if (this.isWon(board)) {
      // once game is over, player will not be able play anymore
      this.setState({
        message: `WON: ${this.state.player}`,
        player: "",
      });
      return;
    }

    if (board.indexOf("") === -1) {
      // if no more moves left, then the game is draw
      this.setState({ message: `DRAW`, player: "" });
    } else {
      // if some moves are left
      const player = this.state.player === "X" ? "O" : "X";
      this.setState({ player, message: `TURN: ${player}` });
    }
  };

  render() {
    return (
      <div>
        <Message value={this.state.message} />
        <Board onClick={this.handleChange} value={this.state.board} />
        <Button onClick={this.handleUndo} value="Undo Move" />
        <Button onClick={this.reset} value="Refresh" />
      </div>
    );
  }
}

export default Game;
