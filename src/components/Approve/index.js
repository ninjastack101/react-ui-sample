import React from "react";
import Approver from "../Approver";
import "./approve.css";

export default function Approve({ approvers }) {
  let acceptedApprovers = approvers
    .filter(approver => {
      return approver.status === "accepted";
    })
    .map((approver, index) => {
      return (
        <li key={index}>
          <p className="counter">{index + 1}</p>
          <Approver {...approver} />
        </li>
      );
    });

  let createdtedApprovers = approvers
    .filter(approver => {
      return approver.status === "created";
    })
    .map((approver, index) => {
      return (
        <li key={index}>
          <div>
            <p className="counter">{acceptedApprovers.length + index + 1}</p>
            <Approver {...approver} />
          </div>
        </li>
      );
    });

  return (
    <div className="approved-table">
      <div className="approved-title"> Approved </div>
      <ol className="approved-user">{acceptedApprovers}</ol>
      <div className="approved-border"> </div>
      <div className="approved-title"> Pending </div>
      <ol className="approved-user">{createdtedApprovers}</ol>
    </div>
  );
}
