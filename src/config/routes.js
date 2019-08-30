import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "../pages/home";

export default function Routes() {
  return (
    <BrowserRouter
      basename={'https://githubclone-4ebed.web.app/'}
    >
      <Route path="/" exact component={Home} />
      <Route path="/:login" component={Home} />
    </BrowserRouter>
  );
}
