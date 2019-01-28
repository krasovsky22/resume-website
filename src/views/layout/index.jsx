//@ts-check
import React, { PureComponent } from "react";
import Header from "./Header";
import Main from "./Main";

export default class MainContent extends PureComponent {
  render() {
    return (
      <>
        <Header />
        <Main />
      </>
    );
  }
}
