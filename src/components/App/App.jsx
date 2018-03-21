import React from "react";
import withApp from "./withApp";

import User from "../User";
import Header from "../Header";
import Footer from "../Footer";

import block from "bem-cn";
import "./App.css";
const b = block("App");

export const App = ({
  changeViewHandler,
  viewState,
  list,
  module,
  dataPages,
  pageCount,
  pageCountPlusHandler,
  pageCountMinusHandler,
  setSelectedPageHandler,
  selectedPage,
  pages
}) => (
  <div className={b()}>
    <Header
      {...{
        changeViewHandler,
        viewState,
        pageCount,
        list,
        module,
        pageCountPlusHandler,
        pageCountMinusHandler
      }}
    />
    <div className={b("users-wrapper", { [viewState]: true })()}>
      <div className={b("users", { [viewState]: true })()}>
        {dataPages.map(user => (
          <User key={user.number} {...user} {...{ viewState, list, module }} />
        ))}
      </div>
    </div>
    <Footer {...{ pages, setSelectedPageHandler, selectedPage }} />
  </div>
);

export default withApp(App);
