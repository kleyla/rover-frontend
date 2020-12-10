import { Box, Grid, Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "./../../hooks/useStyles";

const Footer = () => {
  const classes = useStyles();
  const year = new Date().getFullYear();

  return (
    <footer className={classes.footer}>
      <Box my={1}>
        <Grid container>
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
