import * as React from "react";
import Button from "@mui/material/Button";
import { pink } from "@mui/material/colors";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  [theme.breakpoints.down("sm")]: {
    width: 10,
    height: 50,
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "8rem",
  },
}));

function Square(props) {
  const classes = `square ${useStyles()}`;
  return (
    <div>
      <Button
        className={classes}
        variant="outlined"
        sx={{
          color: pink[200],
          fontSize: { xs: 20, sm: 30, md: 80 },
          width: {
            xs: "4rem", // theme.breakpoints.up('xs')
            sm: 90, // theme.breakpoints.up('sm')
            md: 120, // theme.breakpoints.up('md')
            lg: 180, // theme.breakpoints.up('lg')
            xl: 190, // theme.breakpoints.up('xl')
          },
        }}
        onClick={props.onClick}
      >
        {props.value}
      </Button>
    </div>
  );
}

export default Square;
