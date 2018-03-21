import React, { Fragment } from "react";

import block from "bem-cn";
import "./Footer.css";
const b = block("Footer");

export const Footer = ({ pages, setSelectedPageHandler, selectedPage }) => (
  <div className={b()}>
    <div
      className={b("page-navigate", {
        toFirst: true
      })()}
      data-page="first"
      onClick={setSelectedPageHandler}
    />
    <hr className={b("line")()} />
    <div
      className={b("page-navigate", {
        toPrev: true
      })()}
      data-page="prev"
      onClick={setSelectedPageHandler}
    />
    <hr className={b("line")()} />
    {Object.keys(pages).map(index => (
      <Fragment key={index}>
        <div
          data-page={index}
          className={b("page-navigate", {
            page: true,
            selected: selectedPage === parseInt(index, 10)
          })()}
          onClick={setSelectedPageHandler}
        >
          {pages[index].min + 1}-{pages[index].max}
        </div>
        <hr className={b("line")()} />
      </Fragment>
    ))}
    <div
      className={b("page-navigate", {
        toNext: true
      })()}
      data-page="next"
      onClick={setSelectedPageHandler}
    />
    <hr className={b("line")()} />
    <div
      className={b("page-navigate", {
        toLast: true
      })()}
      data-page="last"
      onClick={setSelectedPageHandler}
    />
  </div>
);

export default Footer;
