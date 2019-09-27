import React from "react";
import "./title.css";

export default function Title({ requestJson }) {
  return (
    <div className="title-bar">
      <img
        alt="service Logo"
        className="title-barlogo"
        src={requestJson.service.logo}
      ></img>
      <p className="title">
        Request for {requestJson.service.name} (#
        {requestJson.id})
      </p>
    </div>
  );
}
