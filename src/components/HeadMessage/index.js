import React from "react";
import "./headMessage.css";

export default function HeadMessage() {
  return (
    <div className="security-block">
      <p className="security-title">
        <img alt="lock Icon" className="lock-icon" src="/assets/lock.svg" />
        &nbsp;Security Message
      </p>
      <p className="head-message-text">
        Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id
        elit non mi porta gravida at eget metus.
      </p>
    </div>
  );
}
