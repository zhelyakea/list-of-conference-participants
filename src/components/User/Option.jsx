import React from "react";
import dotsVertical from "../../svg/dots-vertical.svg";

import block from "bem-cn";
import "./User.css";
const b = block("User");

export const Option = ({ viewState }) => (
  <div
    className={b("option-wrapper", {
      [viewState]: true
    })()}
  >
    <img className={b("options")()} src={dotsVertical} alt="options" />
  </div>
);
export default Option;
