import React from "react";
import "./title.css";

export default function Title({ logo, name, id }) {
  return (
    <div className="title-bar">
      <img alt="service Logo" className="title-barlogo" src={logo}></img>
      <p className="title">
        Request for {name} (#
        {id})
      </p>
    </div>
  );
}
