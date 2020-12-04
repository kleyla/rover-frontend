import React from "react";
import { ThemeProvider, makeStyles, Container } from "@material-ui/core";
import { BrowserRouter as Router, Switch, HashRouter } from "react-router-dom";
import theme from "./themeConfig";
import Routes from "./Routes";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";

const useStyles = makeStyles({
  root: {
    display: "flex",
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
});

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <HashRouter basename="/">
        <div className={classes.root}>
          <Navbar />
          <div className={classes.content}>
            <div className={classes.toolbar}></div>
            <Container maxWidth="lg">
              <Switch>
                <Routes />
              </Switch>
            </Container>
          </div>
          <Footer />
        </div>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
