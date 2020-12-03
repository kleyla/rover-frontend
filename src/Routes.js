import React from "react";
import { Route } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Gps from "./components/Gps";

const Routes = () => {
  return (
    <>
      <Route exact path="/" component={Home}></Route>
      <Route path="/about" component={About}></Route>
      <Route path="/data/gps" component={Gps}></Route>
    </>
  );
};

export default Routes;
