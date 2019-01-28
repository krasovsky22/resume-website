//@ts-check
import { Container } from "reactstrap";
import React, { PureComponent, lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import CircleSpinner from "src/components/loaders/CircleSpinner";

export default class Main extends PureComponent {
  render() {
    const Loadable = loader => {
      const Component = lazy(loader);
      return props => (
        <Suspense fallback={<CircleSpinner />}>
          <Component {...props} />
        </Suspense>
      );
    };

    return (
      <Container>
        <BrowserRouter>
          <Switch>
            <Route
              path="/"
              exact
              component={Loadable(() => import("src/views/resume"))}
            />
          </Switch>
        </BrowserRouter>
      </Container>
    );
  }
}
