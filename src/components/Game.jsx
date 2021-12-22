import React from "react";
import Board from "./Board";
import CalculateWinner from "./calculateWinner";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import { pink } from "@mui/material/colors";
import CardContent from "@mui/material/CardContent";
import GameIcon from "@mui/icons-material/SportsEsports";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null),
        },
      ],
      stepNumber: 0,
      xIsNext: true,
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (CalculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      history: history.concat([
        {
          squares: squares,
        },
      ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0,
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = CalculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ? "Go to move #" + move : "Go to game start";

      return (
        <li key={move}>
          <Button
            variant="contained"
            color="info"
            size="small"
            onClick={() => this.jumpTo(move)}
          >
            {desc}
          </Button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }
    const Div = styled("div")(({ theme }) => ({
      ...theme.typography.h3,
      backgroundColor: pink[500],
      padding: theme.spacing(1),
      display: "flex",
      justifyContent: "center",
      padding: 30,
    }));
    const MyDiv = styled("div")(({ theme }) => ({
      ...theme.CardContent,

      textAlign: "center",

      margin: 40,
      padding: 30,
    }));

    const card = (
      <React.Fragment>
        <CardContent>
          <div className="game-board">
            <Board
              squares={current.squares}
              onClick={(i) => this.handleClick(i)}
            />
          </div>
          <div className="game-info">
            <div>{status}</div>
            <ol>{moves}</ol>
          </div>
        </CardContent>
      </React.Fragment>
    );

    return (
      <Container maxWidth="md" sx={{ justifyContent: "center" }}>
        <Div>
          <GameIcon sx={{ color: pink[200], fontSize: 50, paddingRight: 3 }} />
          <div>Tic Tac Toe</div>
        </Div>
        <Card variant="outlined">
          <MyDiv>{card}</MyDiv>
        </Card>
      </Container>
    );
  }
}

export default Game;
