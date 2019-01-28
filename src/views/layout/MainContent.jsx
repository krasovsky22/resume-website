//@ts-check
import { Container } from "reactstrap";
import React, { PureComponent, lazy, Suspense } from "react";
import CircleSpinner from "@/components/loaders/CircleSpinner";
import { BrowserRouter, Route, Switch } from "react-router-dom";

export default class MainContent extends PureComponent {
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
              component={Loadable(() => import("@/views/resume"))}
            />
          </Switch>
        </BrowserRouter>
      </Container>
    );
  }
}
