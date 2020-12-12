import React from "react";
import {
  AppBar,
  Button,
  Icon,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
  withStyles,
  Badge,
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import useGetGps from "../../hooks/useGetGps";

const useStyles = makeStyles((theme) => ({
  offset: theme.mixins.toolbar,
  title: {
    flexGrow: 1,
    textDecoration: "none",
    color: theme.palette.common.white,
  },
  appBar: {
    // backgroundColor: theme.palette.primary.dark,
  },
  textWhite: {
    color: theme.palette.common.white,
    textDecoration: "none",
  },
}));
const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}))(Badge);

const Navbar = (props) => {
  const classes = useStyles();

  const {
    Hour,
    Min,
    Sec,
    loading,
  } = useGetGps();

  return (
    <AppBar className={classes.appBar}>
      <Toolbar>
        <Link to="/" className={classes.title}>
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
        <Typography>{ Hour }:</Typography>
        <Typography>{ Min }:</Typography>
        <Typography>{ Sec }</Typography>
        <IconButton aria-label="button">
          <StyledBadge badgeContent={4} color="error">
            <Icon color="inherit">notifications</Icon>
          </StyledBadge>
        </IconButton>
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
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
