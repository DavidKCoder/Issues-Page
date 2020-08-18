import React from "react";
import { Route, Redirect } from "react-router-dom";
import routes from "./routes";

export const Routing = () => {
  return (
    <div>
      {routes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          component={route.component}
        />
      ))}
      <Route exact path="/" render={() => <Redirect to="/issues" />} />
    </div>
  );
};
