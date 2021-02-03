import React from "react";
import { Route } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Gps from "./components/Gps";
import Velocimeter from "./components/Velocimeter";
import Altimeter from "./components/Altimeter";

const Routes = () => {
  return (
    <>
      <Route exact path="/" component={Home}></Route>
      <Route path="/about" component={About}></Route>
      <Route path="/data/gps" component={Gps}></Route>
      <Route path="/data/velocimeter" component={Velocimeter} />
      <Route path="/data/altimeter" component={Altimeter} />
    </>
  );
};

export default Routes;
