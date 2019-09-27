import React from "react";
import "./user.css";

export default function User({ src, name }) {
  return (
    <React.Fragment>
      <p>
        <img id="avatar" alt="User" src={src} align="middle" />
        {name}
      </p>
    </React.Fragment>
  );
}
