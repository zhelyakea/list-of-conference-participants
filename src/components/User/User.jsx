import React, { Fragment } from "react";

import Watermark from "./Watermark";
import Option from "./Option";

import { getDuration } from "../../services/getDuration";
import microphoneOff from "../../svg/microphone-off.svg";
import microphone from "../../svg/microphone.svg";
import registered from "../../svg/registered.svg";
import unregistered from "../../svg/unregistered.svg";

import block from "bem-cn";
import "./User.css";
const b = block("User");

export const User = ({
  number,
  watermark,
  screenShot,
  mic,
  isOnline,
  ip,
  duration,
  params: { inVideoCodec, inAudioCodec },
  registration,
  viewState,
  list,
  module
}) => (
  <div className={b({ [viewState]: true })()}>
    <div className={b("left-wrapper", { [viewState]: true })()}>
      <div
        style={{ backgroundImage: `url(${screenShot})` }}
        className={b("avatar", {
          online: isOnline,
          offline: !isOnline
        })()}
      />
      <img
        className={b("microphone-icon", {
          on: mic,
          off: !mic,
          [viewState]: true
        })()}
        src={mic ? microphone : microphoneOff}
        alt="microphone"
      />
      {list && (
        <Fragment>
          <Watermark {...{ viewState, watermark, isOnline }} />
          <span className={b("number", { [viewState]: true })()}>
            #{number}
          </span>
        </Fragment>
      )}
    </div>
    <div className={b("info-wrapper", { [viewState]: true })()}>
      {module && (
        <Fragment>
          <span className={b("number")()}>#{number}</span>
          <div className={b("info-row")()}>
            <Watermark {...{ viewState, watermark, isOnline }} />
          </div>
        </Fragment>
      )}
      <div
        className={b("info-row", {
          second: module && true,
          [viewState]: true
        })()}
      >
        <span className={b("ip-address")()}>{ip}</span>
        <div className={b("registration-wrapper")()}>
          <img
            className={b("registration-icon", {
              [viewState]: true
            })()}
            src={registration ? registered : unregistered}
            alt="registration"
          />
          <span
            className={b("registration-text", {
              registered: registration,
              unregistered: !registration
            })()}
          >
            {registration ? "registered" : "unregistered"}
          </span>
        </div>
      </div>
      <div
        className={b("connection-wrapper", {
          [viewState]: true
        })()}
      >
        <span className={b("connection")()}>
          {module && "Подключение: "}
          {inVideoCodec}, {inAudioCodec}
        </span>
      </div>
      <div
        className={b("duration-wrapper", {
          [viewState]: true
        })()}
      >
        <span className={b("duration")()}>
          {module && "Длительность: "}
          {getDuration(duration)}
        </span>
      </div>
      {list && <Option {...{ viewState }} />}
    </div>
    {module && <Option {...{ viewState }} />}
  </div>
);

export default User;
