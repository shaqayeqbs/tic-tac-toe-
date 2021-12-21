import * as React from "react";
import Button from "@mui/material/Button";
import { pink } from "@mui/material/colors";
import { DonutLargeRounded, DonutLargeSharp } from "@mui/icons-material";

function Square(props) {
  return (
    <Button
      className="square"
      variant="outlined"
      sx={{ color: pink[200], fontSize: 80 }}
      onClick={props.onClick}
    >
      {props.value}
    </Button>
  );
}

export default Square;
