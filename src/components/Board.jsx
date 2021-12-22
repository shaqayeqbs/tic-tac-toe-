import Square from "./Square";
import React from "react";
import Grid from "@mui/material/Grid";
class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    return (
      <Grid
        container
        spacing={0}
        alignItems="center"
        justifyContent="center"
        sx={{
          marginBottom: 10,
          textAlign: "center",
          alignItems: "center",
          justfy: "center",
        }}
      >
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </Grid>
    );
  }
}

export default Board;
