import React from "react";
import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Box,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import useGetGps from "../../hooks/useGetGps";
import { useStyles } from "./../../hooks/useStyles";

const Navbar = (props) => {
  const classes = useStyles();

  const { Hour, Min, Sec, NroSats } = useGetGps();

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
        <Link to="/about" className={classes.textWhite}>
          <Button variant="text" color="inherit">
            About
          </Button>
        </Link>
        <div className={classes.space}>
          <Typography>
            {Hour}:{Min}:{Sec}
          </Typography>
        </div>
        <Box display={{ xs: "none", sm: "block" }}>
          <Typography variant="h6" color="initial">
            {NroSats}
          </Typography>
        </Box>
        <Box display={{ xs: "none", sm: "block" }}>
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/satelite.svg`}
            alt="Satellite"
            className={classes.iconSatellite}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
