import React from "react";
import Request from "../Request";
import Approve from "../Approve";
import Title from "../Title";
import "./content.css";

export default function Content({ requestJson }) {
  return (
    <React.Fragment>
      <Title
        logo={requestJson.service.logo}
        title={requestJson.service.title}
        id={requestJson.id}
      />
      <div className="content-box">
        <Request requestJson={requestJson} />
        <Approve approvers={requestJson.approvers} />
      </div>
    </React.Fragment>
  );
}
