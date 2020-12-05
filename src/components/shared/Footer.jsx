import {
  Box,
  Grid,
  Link,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import { socialList } from "./../../data/socialList";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: "#343a40",
    position: "fixed",
    bottom: "0px",
    width: "100%",
    color: theme.palette.common.white,
  },
}));
const Footer = () => {
  const classes = useStyles();
  const year = new Date().getFullYear();

  return (
    <footer className={classes.footer}>
      <Box my={2}>
        <Grid container spacing={1}>
          {socialList.map((item, index) => {
            return (
              <Grid item xs={12} md={6} key={index}>
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                >
                  <Link
                    href={item.link}
                    color="inherit"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <ListItem>
                      <ListItemIcon>{item.icon}</ListItemIcon>
                      <ListItemText>{item.text}</ListItemText>
                    </ListItem>
                  </Link>
                </Grid>
              </Grid>
            );
          })}
          <Grid item xs={12}>
            <Grid container justify="center">
              <Typography align="center">
                &copy; {year} Rover Challenge
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </footer>
  );
};

export default Footer;
