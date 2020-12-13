import React from "react";
import {
  AppBar,
  Button,
  makeStyles,
  Toolbar,
  Typography,
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import useGetGps from "../../hooks/useGetGps";
import { useStyles } from "./../../hooks/useStyles";

const Navbar = (props) => {
  const classes = useStyles();

  const { Hour, Min, Sec, loading } = useGetGps();

  return (
    <AppBar className={classes.appBar}>
      <Toolbar>
        <Link to="/" className={classes.titleAppBar}>
          <ListItem button>
            <ListItemAvatar>
              <Avatar
                alt="Bolivian flag"
                variant="square"
                src={`${process.env.PUBLIC_URL}/assets/images/bandera.png`}
              />
            </ListItemAvatar>
            <ListItemText primary="ROVER"></ListItemText>
          </ListItem>
        </Link>
        <Link to="/" className={classes.textWhite}>
          <Button variant="text" color="inherit">
            Home
          </Button>
        </Link>
        <Link to="/about" className={classes.textWhite}>
          <Button variant="text" color="inherit">
            About
          </Button>
        </Link>
        <div className={classes.space}></div>
        <Typography>{Hour}:</Typography>
        <Typography>{Min}:</Typography>
        <Typography>{Sec}</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
