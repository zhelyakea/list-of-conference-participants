import React, { Fragment } from "react";

import block from "bem-cn";
import "./User.css";
const b = block("User");

export const Watermark = ({ viewState, watermark, isOnline }) => (
  <Fragment>
    <span className={b("watermark", { [viewState]: true })()}>{watermark}</span>
    <div
      className={b("status", {
        online: isOnline,
        offline: !isOnline
      })()}
    />
  </Fragment>
);
export default Watermark;
