import React from "react";

import magnify from "../../svg/magnify.svg";
import chevronUp from "../../svg/chevron-up.svg";
import chevronDown from "../../svg/chevron-down.svg";
import accountPlus from "../../svg/account-plus.svg";
import viewList from "../../svg/view-list.svg";
import viewListSelected from "../../svg/view-list-selected.svg";
import viewModule from "../../svg/view-module.svg";
import viewModuleSelected from "../../svg/view-module-selected.svg";

import block from "bem-cn";
import "./Header.css";
const b = block("Header");

export const Header = ({
  changeViewHandler,
  viewState,
  pageCount,
  list,
  module,
  pageCountPlusHandler,
  pageCountMinusHandler
}) => (
  <div className={b()}>
    <div className={b("left-wrapper")()}>
      <div className={b("left-block", { logo: true })()}>
        <span className={b("logo-name")()}>vinteo</span>
      </div>
      <div className={b("left-block", { account: true })()}>
        <img
          className={b("account-plus")()}
          src={accountPlus}
          alt="account-plus"
        />
        <span>Add contact</span>
      </div>
      <div className={b("left-block", { search: true })()}>
        <img className={b("search-icon")()} src={magnify} alt="search" />
        <span>Search</span>
      </div>
    </div>
    <div className={b("right-wrapper")()}>
      <div className={b("left-block", { onPage: true })()}>
        <span>Show on page</span>
        <input
          className={b("page-count", {
            select: true
          })()}
          value={pageCount}
          readOnly
        />
        <img
          className={b("page-count-icon", {
            upSelect: true
          })()}
          src={chevronUp}
          onClick={pageCountPlusHandler}
          alt="page-count"
        />
        <img
          className={b("page-count-icon", {
            downSelect: true
          })()}
          src={chevronDown}
          onClick={pageCountMinusHandler}
          alt="page-count"
        />
        <input
          className={b("page-count", {
            all: true
          })()}
          value="All"
          readOnly
        />
        <img
          className={b("page-count-icon", {
            downSelectAll: true
          })()}
          src={chevronDown}
          alt="page-count"
        />
      </div>
      <div className={b("left-block", { info: true })()}>
        <span>Additional info</span>
        <div className={b("additional-info-button")()}>
          <div className={b("additional-info-button-circle")()} />
        </div>
      </div>
      <div className={b("left-block", { view: true })()}>
        <span className={b("view-text")()}>View mode</span>
        <img
          data-view="module"
          onClick={changeViewHandler}
          className={b("view-icon")()}
          src={module ? viewModuleSelected : viewModule}
          alt="view"
        />
        <img
          data-view="list"
          onClick={changeViewHandler}
          className={b("view-icon", {
            list: true
          })()}
          src={list ? viewListSelected : viewList}
          alt="view"
        />
        <img
          data-view="module"
          className={b("view-icon")()}
          src={viewModule}
          alt="view"
        />
      </div>
    </div>
  </div>
);

export default Header;
