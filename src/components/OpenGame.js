import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    disploy: "flexbox",
    flex: 'columns', 
    flexGrow: 1,
  },
  game: {
      flexGrow: 1,
      overflow: 'auto',
  }
});

export default function OpenGame() {
  const classes = useStyles();

  return <div className={classes.root}>
     <div className={classes.game}></div>
  </div>;
}
